"use client";

import { ScrollReveal } from "./ScrollReveal";


export function Story() {
  return (
    <section id="story" className="py-32 md:py-40 px-5">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>


        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-white leading-[1.1] mb-10">
            WE DON&apos;T MAKE
            <br />
            BIKES FOR EVERYONE.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-base md:text-lg font-light leading-[2] mb-8">
            We make them for the rider who feels the difference between a good
            frame and a great one. Who knows that the last 200 grams matter.
            Who trusts engineering over marketing.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-text-tertiary text-sm md:text-base font-light leading-[2] mb-8">
            8BIKE was born with a single conviction: a bicycle frame
            should be invisible. You shouldn&apos;t think about it. You should
            think about the road, the climb, the descent. The frame&apos;s job is to
            disappear -- to transfer every watt, absorb every vibration, and
            give you back nothing but the ride.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-text-tertiary text-sm md:text-base font-light leading-[2]">
            That&apos;s what precision means to us. Not a label.
            A discipline.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
