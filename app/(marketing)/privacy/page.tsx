import { Metadata } from "next";
import { Container } from "../../components/ui/Container";
import { FlagBar } from "../../components/FlagBar";

export const metadata: Metadata = {
  title: "Privacy Policy | 8BIKE",
  description: "8BIKE GmbH privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-4">
            PRIVACY POLICY
          </h1>
          <FlagBar className="w-24 mb-6" />
          <p className="text-text-muted text-xs">Last updated: January 2026</p>
        </Container>
      </section>

      <section className="pb-32">
        <Container narrow>
          <div className="space-y-10 text-sm text-text-tertiary font-light leading-[1.9]">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">1. Data Controller</h2>
              <p>
                8BIKE GmbH, Hafenstrasse 42, 20459 Hamburg, Germany ("8BIKE", "we", "us")
                is the data controller responsible for processing your personal data in accordance
                with the EU General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">2. Data We Collect</h2>
              <p className="mb-3">We collect the following categories of personal data:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Contact information (name, email, phone number) when you submit forms
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Technical data (IP address, browser type, device information) collected automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Usage data (pages visited, time spent, interactions) via analytics tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Communications data when you contact us via email or forms
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">3. How We Use Your Data</h2>
              <p className="mb-3">We process your personal data for the following purposes:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Responding to inquiries and providing customer support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Processing test ride bookings
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Improving our website and services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Sending marketing communications (with your consent)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">4. Legal Basis</h2>
              <p>
                We process your data based on: (a) your consent (Art. 6(1)(a) GDPR), (b) performance
                of a contract (Art. 6(1)(b) GDPR), (c) legal obligations (Art. 6(1)(c) GDPR), and
                (d) our legitimate interests (Art. 6(1)(f) GDPR) such as improving our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">5. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary for the purposes outlined above,
                or as required by law. Contact form submissions are retained for 2 years. Analytics data
                is anonymized after 14 months.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">6. Your Rights</h2>
              <p>
                Under GDPR, you have the right to access, rectify, erase, restrict processing, data
                portability, and object to processing of your personal data. To exercise these rights,
                contact us at privacy@8bike.de.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">7. Cookies</h2>
              <p>
                We use essential cookies for website functionality and analytics cookies (with your
                consent) to understand how visitors use our site. You can manage cookie preferences
                through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">8. Contact</h2>
              <p>
                For privacy-related inquiries, contact our Data Protection Officer at privacy@8bike.de
                or write to: 8BIKE GmbH, Attn: Data Protection, Hafenstrasse 42, 20459 Hamburg,
                Germany.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
