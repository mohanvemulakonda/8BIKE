import { Metadata } from "next";
import { Container } from "../../components/ui/Container";


export const metadata: Metadata = {
  title: "Terms & Conditions | EIGHT",
  description: "EIGHT GmbH terms and conditions of use.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-4">
            TERMS & CONDITIONS
          </h1>


          <p className="text-text-muted text-xs">Last updated: January 2026</p>
        </Container>
      </section>

      <section className="pb-32">
        <Container narrow>
          <div className="space-y-10 text-sm text-text-tertiary font-light leading-[1.9]">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">1. General</h2>
              <p>
                These Terms and Conditions govern your use of the EIGHT website (eight.bike) and any
                purchases made through our authorized dealer network. By using this website, you agree
                to these terms in full.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">2. Products & Pricing</h2>
              <p>
                All prices displayed on this website are recommended retail prices in Euros (EUR)
                and include applicable VAT. Final pricing may vary by dealer. Product specifications
                and availability are subject to change without notice. Images are for illustration
                purposes and may differ from the actual product.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">3. Ordering & Delivery</h2>
              <p>
                EIGHT products are sold exclusively through our authorized dealer network. Orders
                placed through dealers are subject to the dealer's own terms and conditions. Delivery
                times vary by model and region. Custom-configured bikes typically ship within 4-8 weeks.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">4. Warranty</h2>
              <p>
                All EIGHT frames are covered by our lifetime warranty for the original purchaser.
                Components carry a 2-year warranty. Full warranty terms are available on our
                warranty page. The warranty does not cover normal wear, crash damage, or unauthorized
                modifications.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, designs, and software —
                is the property of EIGHT GmbH and is protected by German and international copyright
                and trademark laws. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                EIGHT GmbH provides this website and its content on an "as is" basis. We make no
                warranties regarding the completeness or accuracy of the content. To the maximum extent
                permitted by law, EIGHT GmbH is not liable for any indirect or consequential damages
                arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Germany. The place
                of jurisdiction is Hamburg, Germany. If any provision of these terms is found to be
                invalid, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">8. Contact</h2>
              <p>
                For questions regarding these terms, contact us at legal@eight.bike or write to:
                EIGHT GmbH, Hafenstrasse 42, 20459 Hamburg, Germany.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
