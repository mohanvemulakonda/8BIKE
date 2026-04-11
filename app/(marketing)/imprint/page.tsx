import { Metadata } from "next";
import { Container } from "../../components/ui/Container";
import { FlagBar } from "../../components/FlagBar";
import { Monogram } from "../../components/Monogram";

export const metadata: Metadata = {
  title: "Imprint | 8BIKE",
  description: "8BIKE GmbH legal imprint (Impressum) as required by German law.",
};

export default function ImprintPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container>
          <p className="text-xs tracking-[6px] uppercase text-red font-medium mb-4">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-4">
            IMPRINT
          </h1>
          <FlagBar className="w-24 mb-6" />
          <p className="text-text-muted text-xs">Impressum gem. 5 TMG</p>
        </Container>
      </section>

      <section className="pb-32">
        <Container narrow>
          <div className="space-y-10 text-sm text-text-tertiary font-light leading-[1.9]">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
              <p>
                8BIKE GmbH
                <br />
                Hafenstrasse 42
                <br />
                20459 Hamburg
                <br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
              <p>
                Phone: +49 40 000 0000
                <br />
                Email: hello@8bike.de
                <br />
                Website: www.8bike.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Represented By</h2>
              <p>Managing Director: [Name]</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Registration</h2>
              <p>
                Commercial Register: Amtsgericht Hamburg
                <br />
                Registration Number: HRB [Number]
                <br />
                VAT ID: DE [Number]
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Responsible for Content
              </h2>
              <p>
                Responsible according to 18 Abs. 2 MStV:
                <br />
                [Name], Hafenstrasse 42, 20459 Hamburg
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Dispute Resolution
              </h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR).
                We are not obligated and not willing to participate in dispute resolution proceedings
                before a consumer arbitration board.
              </p>
            </div>

            <div className="pt-6 flex justify-center">
              <Monogram size={48} variant="gradient-dark" bgColor="#050505" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
