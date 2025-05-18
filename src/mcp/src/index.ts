import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { ExecutionContext, Fetcher } from "@cloudflare/workers-types";

interface Env {
  ASSETS: Fetcher;
}

// Define our MCP agent with tools
export class MyMCP extends McpAgent {
  server = new McpServer({
    name: "Luke Bot",
    version: "1.0.0",
  });

  static cfEnv: Env;
  static cfRequest: Request;

  static setup(request: Request, env: Env, ctx: ExecutionContext) {
    MyMCP.cfEnv = env;
    MyMCP.cfRequest = request;
  }

  async init() {
    // Tool to fetch information about me
    this.server.tool(
      "fetch-info-about-luke",
      {
        info: z.enum(["certifications", "education", "experience", "profile"]),
      },
      async ({ info }) => {
        const resourceLocation = `/content/${info}/content.json`;

        const url = new URL(MyMCP.cfRequest.url);
        const host = url.origin;

        const res = await MyMCP.cfEnv.ASSETS.fetch(host + resourceLocation);
        const jsonString = await res.text();

        return { content: [{ type: "text", text: jsonString }] };
      }
    );
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);

    MyMCP.setup(request, env, ctx);

    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
    }

    if (url.pathname === "/mcp") {
      return MyMCP.serve("/mcp").fetch(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};
