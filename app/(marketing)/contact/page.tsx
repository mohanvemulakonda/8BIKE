import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | 8BIKE",
  description:
    "Get in touch with 8BIKE. Contact our team for sales inquiries, dealer partnerships, or press requests.",
};

export default function ContactPage() {
  return <ContactContent />;
}
