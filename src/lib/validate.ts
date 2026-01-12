export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function validatePayload({ name, email, message }: ContactFormData): string | null {
  if (!name || typeof name !== "string") {
    return "Name is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (name.length > 100) {
    return "Name is too long";
  }
  if (!email || typeof email !== "string") {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  if (email.length > 200) {
    return "Email is too long";
  }
  if (!message || typeof message !== "string") {
    return "Message is required";
  }
  if (message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }
  if (message.length > 5000) {
    return "Message is too long";
  }
  return null;
}
