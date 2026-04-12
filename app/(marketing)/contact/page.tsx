import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | EIGHT",
  description:
    "Get in touch with EIGHT. Contact our team for sales inquiries, dealer partnerships, or press requests.",
};

export default function ContactPage() {
  return <ContactContent />;
}
