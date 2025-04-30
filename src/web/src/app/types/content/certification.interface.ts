export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  imageUrl?: string;
  description?: string;
}

export interface CertificationCategory {
  id: string;
  name: string;
  certifications: Certification[];
}
