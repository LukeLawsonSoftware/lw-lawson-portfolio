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

  async init() {
    // Tool to fetch information about me
    this.server.tool(
      "fetch-info-about-luke",
      {
        info: z.enum(["certifications", "education", "experience", "profile"]),
      },
      async ({ info }) => {
        const resourceLocation = `content/${info}/content.json`;
        const jsonString = await fetch(
          "https://lw-lawson-portfolio.lawsonluke2002.workers.dev/" +
            resourceLocation
        ).then((res) => res.text());
        return { content: [{ type: "text", text: jsonString }] };
      }
    );
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // Store the current request for URL resolution in tools
    const url = new URL(request.url);

    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
    }

    if (url.pathname === "/mcp") {
      return MyMCP.serve("/mcp").fetch(request, env, ctx);
    }

    return env.ASSETS.fetch(request.url);
  },
};
