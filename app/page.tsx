"use client";
const heroFloat = `
@keyframes heroFloat {

  0% {
    transform: translateY(0px) rotate(-4deg) scale(1);
  }

  25% {
    transform: translateY(-22px) rotate(2deg) scale(1.015);
  }

  50% {
    transform: translateY(-38px) rotate(5deg) scale(1.03);
  }

  75% {
    transform: translateY(-14px) rotate(1deg) scale(1.015);
  }

  100% {
    transform: translateY(0px) rotate(-4deg) scale(1);
  }

}
`;

import FadeIn from "@/components/FadeIn";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function Home() {
  if (typeof document !== "undefined") {

    const style = document.createElement("style");
    style.innerHTML = heroFloat;
    
  
    if (!document.getElementById("hero-float-style")) {
  
      style.id = "hero-float-style";
      document.head.appendChild(style);
  
    }
  
  }
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
    <CursorGlow />
    <SmoothScroll />
    <div
  className="
    pointer-events-none
    fixed
    inset-0
    z-[999]
    opacity-[0.05]
    mix-blend-soft-light
  "
  style={{
    backgroundImage: "url('/images/grain.png')",
    backgroundRepeat: "repeat",
  }}
/>

      {/* BACKGROUND GLOW */}

      <div className="w-[900px] h-[900px] bg-white/10 blur-[220px] rounded-full absolute top-[-500px] left-[-200px] animate-pulse" />

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">

      <a
  href="#"
  className="
    text-lg
    md:text-xl
    tracking-[0.28em]
    uppercase
    text-neutral-300
    hover:text-white
    transition-all
    duration-700
    hover:scale-105
  "
>

  <img
    src="/images/logo.png"
    alt="Luca Toral"
    className="
      h-16
      md:h-18
      object-contain
      opacity-90
      hover:opacity-100
      transition
      duration-700
    "
  />

</a>

        <div className="flex gap-10 text-sm text-neutral-400">

          <a
            href="#works"
            className="hover:text-white transition-all duration-500 hover:tracking-[0.2em]"
          >
            Works
          </a>

          <a
            href="#services"
            className="hover:text-white transition-all duration-500 hover:tracking-[0.2em]"
          >
            Services
          </a>

          <a
            href="#about"
            className="hover:text-white transition-all duration-500 hover:tracking-[0.2em]"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-all duration-500 hover:tracking-[0.2em]"
          >
            Contact
          </a>

        </div>

      </nav>
{/* HERO */}

<section className="relative min-h-screen overflow-hidden flex items-center px-10 md:px-20">

  {/* BACKGROUND GLOW */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute top-[-300px] right-[-200px] w-[900px] h-[900px] bg-white/5 blur-[220px] rounded-full animate-pulse" />

    <div className="absolute bottom-[-400px] left-[-200px] w-[700px] h-[700px] bg-white/[0.03] blur-[200px] rounded-full" />

  </div>

  {/* CONTENT */}

  <div className="relative z-10 max-w-[1500px] mx-auto w-full">

    <div className="grid md:grid-cols-2 gap-16 md:gap-0 items-center gap-0 items-center">

      {/* LEFT */}

      <div>

        <p className="uppercase tracking-[0.45em] text-neutral-500 text-xs mb-8">
        3D Jewelry Designer
        & Product Visual Artist
        </p>

        <h1 className="text-[4.5rem] sm:text-7xl md:text-[8rem] leading-[0.9] font-extralight tracking-tight mb-10">

          Luca
          <br />
          Toral

        </h1>

        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-[580px] mb-14">

        3D Jewelry & Product Designer
specialized in production
and luxury digital experiences.

        </p>
        

        <div className="flex gap-6">
        <MagneticButton>
          <a
            href="#works"
            className="px-8 py-4 border border-white/20 rounded-full hover:border-white/50 transition duration-500 text-sm tracking-wide"
          >
            Selected Works
          </a>
          </MagneticButton>
          <MagneticButton>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition duration-500 text-sm tracking-wide"
          >
            Contact
          </a>
          </MagneticButton>
        
        </div>
      
      </div>

      {/* RIGHT */}

      <div className="relative flex items-center justify-center">
      <div
  className="
    absolute
    w-[500px]
    h-[500px]
    rounded-full
    bg-white/10
    blur-[140px]
    opacity-30
  "
/>

        {/* AMBIENT GLOW */}

        <div className="absolute w-[700px] h-[700px] bg-white/[0.04] blur-[180px] rounded-full" />

        {/* HERO RING */}
        
        <Parallax speed={-0.08}>
        <img
          src="/images/hero-ring.png"
          alt="Hero Ring"
          className="
relative
z-10
w-full
max-w-[520px]
md:max-w-[700px]
mx-auto
object-contain
animate-[heroFloat_7s_ease-in-out_infinite]
hover:scale-[1.02]
transition duration-[2000ms]
translate-y-16
md:translate-y-24
translate-x-6
md:translate-x-10
"
        />
        </Parallax>

      </div>

    </div>

  </div>

  {/* SCROLL INDICATOR */}

  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

    <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />

  </div>

</section>
     
      {/* WORKS */}

      <FadeIn>
      <Reveal>

        <section
          id="works"
          className="relative z-10 px-10 md:px-20 pt-30 pb-32 border-t border-white/10"
        >

          <div className="max-w-[1200px] mx-auto">

            <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.15em] uppercase text-center mb-20">
              SELECTED WORKS
            </h2>

            {/* LUXURY */}

            <div className="mb-28">

              <h3 className="text-lg md:text-xl font-light tracking-[0.18em] uppercase text-neutral-400 text-center mb-8">
                Luxury Visualization
              </h3>

              <div className="grid md:grid-cols-2 gap-10">

                {/* CARD 1 */}

                <div className="group relative overflow-hidden rounded-[40px] border border-white/10">

                  <img
                    src="/images/luxury-1-main.png"
                    alt=""
                    className="w-full h-[420px] md:h-[600px] object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>

                  <img
                    src="/images/luxury-1-product.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>

                </div>

                {/* CARD 2 */}

                <div className="group relative overflow-hidden rounded-[40px] border border-white/10">

                  <img
                    src="/images/luxury-2-main.png"
                    alt=""
                    className="w-full h-[600px] object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>

                  <img
                    src="/images/luxury-2-product.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>
                </div>

              </div>

            </div>

            {/* FASHION */}

            <div>

              <h3 className="text-lg md:text-xl font-light tracking-[0.18em] uppercase text-neutral-400 text-center mb-8">
                Fashion Oriented
              </h3>

              <div className="grid md:grid-cols-2 gap-10">

                {/* CARD 3 */}

                <div className="group relative overflow-hidden rounded-[40px] border border-white/10">

                  <img
                    src="/images/fashion-1-main.png"
                    alt=""
                    className="w-full h-[600px] object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>
                  <img
                    src="/images/fashion-1-product.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>
                  <div className="absolute bottom-10 left-10 z-20 bg-black/40 backdrop-blur-sm px-5 py-3 rounded-full">

                    <p className="text-white text-xl font-light tracking-wide">
                      Barcelona Concert 2026
                    </p>

                  </div>

                </div>

                {/* CARD 4 */}

                <div className="group relative overflow-hidden rounded-[40px] border border-white/10">

                  <img
                    src="/images/fashion-2-main.png"
                    alt=""
                    className="w-full h-[600px] object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                 <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>
                  <img
                    src="/images/fashion-2-product.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div
  className="
    absolute inset-0
    bg-black/20
    group-hover:bg-black/10
    transition duration-[1600ms]
  "
/>
<div
  className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition duration-1000
    pointer-events-none
  "
>

  <div
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      rotate-12
      bg-white/20
      blur-3xl
      group-hover:left-[140%]
      transition-all
      duration-[1800ms]
    "
  />

</div>
                  <div className="absolute bottom-10 left-10 z-20 bg-black/40 backdrop-blur-sm px-5 py-3 rounded-full">

                    <p className="text-white text-xl font-light tracking-wide">
                      Men Of The Year Ring For GQ
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        </Reveal>
      </FadeIn>

      {/* SERVICES */}

      <FadeIn>
      <Reveal>

        <section
          id="services"
          className="relative z-10 px-10 md:px-20 py-0 border-t border-white/10"
        >

          <div className="max-w-[1400px] mx-auto">

            <div className="max-w-[900px] mb-28">

              <p className="uppercase tracking-[0.4em] text-neutral-500 text-xs mb-6">
                Services
              </p>

              <h2 className="text-5xl md:text-7xl font-extralight leading-[0.95] mb-10">
                End-to-End Jewelry Development
              </h2>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-[800px]">
                From concept ideation to production-ready execution,
                combining creative direction, technical precision and
                premium visual presentation for both handcrafted
                pieces and scalable jewelry collections.
                AVAILABLE FOR SELECTED FREELANCE COLLABORATIONS
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-12">

              {/* CARD 1 */}

              <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2">

                <div className="h-[220px] bg-neutral-900 overflow-hidden">

                  <img
                    src="/images/process-1.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="p-10">

                  <p className="text-neutral-500 text-sm mb-6">
                    01
                  </p>

                  <h3 className="text-3xl font-extralight mb-6">
                    Concept & Design Development
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    Creative ideation and jewelry design development tailored to both unique handcrafted pieces and scalable collections.
                  </p>

                </div>

              </div>

              {/* CARD 2 */}

              <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2">

                <div className="h-[220px] bg-neutral-900 overflow-hidden">

                  <img
                    src="/images/process-2.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="p-10">

                  <p className="text-neutral-500 text-sm mb-6">
                    02
                  </p>

                  <h3 className="text-3xl font-extralight mb-6">
                    CAD & Technical Execution
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    Precision 3D CAD modeling developed for real manufacturing workflows and production-ready detailing.
                  </p>

                </div>

              </div>

              {/* CARD 3 */}

              <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2">

                <div className="h-[220px] bg-neutral-900 overflow-hidden">

                  <img
                    src="/images/process-3.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="p-10">

                  <p className="text-neutral-500 text-sm mb-6">
                    03
                  </p>

                  <h3 className="text-3xl font-extralight mb-6">
                    Production Support
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                  Collaboration with jewelry workshop partners for prototyping and manufacturing processes.
                  </p>

                </div>

              </div>

              {/* CARD 4 */}

              <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2">

                <div className="h-[220px] bg-neutral-900 overflow-hidden">

                  <img
                    src="/images/process-4.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="p-10">

                  <p className="text-neutral-500 text-sm mb-6">
                    04
                  </p>

                  <h3 className="text-3xl font-extralight mb-6">
                    Visualization
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                   High-end jewelry rendering and cinematic presentation designed for brands and campaigns
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        </Reveal>
      </FadeIn>

      {/* ABOUT */}

 <FadeIn>
 <Reveal>
 <section
  id="about"
  className="relative z-10 px-10 md:px-20 pt-32 pb-72 border-t border-white/10"
 >

  <div className="max-w-[1400px] mx-auto">

    {/* TOP AREA */}

    <div className="grid md:grid-cols-2 gap-24 items-start animate-fadeUp">

      {/* LEFT */}

      <div>

        <p className="uppercase tracking-[0.4em] text-neutral-500 text-xs mb-6">
          About
        </p>

        <h2 className="text-5xl md:text-7xl font-extralight leading-[0.95] mb-12 animate-titleReveal">
        3D Designer- Jewerly
        </h2>

        <p className="text-neutral-400 text-lg leading-relaxed max-w-[700px]">
        Hi, my name is Luca Toral, and I’m a 3D and product designer specialized in jewelry CAD, rendering, and design for manufacturing.

I studied a Higher Technical Degree in VR & AR, later completed a Master’s Degree in 3D Arts at CEV, and specialized in 3D Jewelry Design at Gravotech, developing strong skills in CAD modeling, visualization, and production-oriented workflows.

Over the past years, I have worked as a freelance designer collaborating with luxury and fashion-oriented brands, manufacturers, and creative teams. I also worked at D’Or Joiers, contributing to jewelry development and premium render presentations for brands such as Tiffany & Co. and Misui.

In addition, I collaborated with brands like TwoJeys and other fashion-oriented jewelry brands across Spain, always staying connected to new trends and visual directions.

Although jewelry is my main specialization and passion, I’m also highly versatile as a 3D and product designer, capable of designing, creating, or replicating almost any kind of object in 3D with a strong focus on aesthetics, functionality, and realistic production.

        </p>

      </div>

      {/* RIGHT */}

      <div className="relative">

        <div className="overflow-hidden rounded-[40px] bg-neutral-900">

          <img
            src="/images/profile.png"
            alt="Luca Toral"
            className="
w-full
h-[820px]
object-cover
grayscale
hover:grayscale-0
transition
duration-[1800ms]
hover:scale-[1.04]
animate-portraitFloat
"
          />

        </div>

      </div>

    </div>

{/* BRANDS */}

<div className="mt-16 pt-12 border-t border-white/10">

  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-12 md:gap-x-20 items-center animate-brandsReveal">

    {/* TWOJEYS */}

    <a
      href="https://www.twojeys.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/2j.png"
        alt="TwoJeys"
        className="h-40 md:h-52 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* DOR */}

    <a
      href="https://www.dorjoiers.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/dor.png"
        alt="D'Or Joiers"
        className="h-32 md:h-40 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* TIFFANY */}

    <a
      href="https://www.tiffany.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/tiffany.png"
        alt="Tiffany & Co."
        className="h-32 md:h-40 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* CAS DEIA */}

    <a
      href="https://casdeia.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/casdeia.webp"
        alt="Cas Deia"
        className="h-32 md:h-40 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* Cainte */}

    <a
      href="https://cainte.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/cainte.png"
        alt="Cainte"
        className="h-32 md:h-40 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* MISUI */}

    <a
      href="https://misui.es/"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/misui.png"
        alt="MISUI"
        className="h-28 md:h-36 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* tucco */}

    <a
      href="https://tuccojewelry.com/"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/tucco.png"
        alt="Tucco"
        className="h-28 md:h-36 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* SCUFFERS */}

    <a
      href="https://scuffers.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/scuffers.png"
        alt="Scuffers"
        className="h-28 md:h-36 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* COLD CULTURE */}

    <a
      href="https://coldcultureworldwide.com"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/coldculture.png"
        alt="Cold Culture"
        className="h-28 md:h-36 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

        {/* GOLD DEALERS */}

        <a
      href="https://thegolddealers.com/?srsltid=AfmBOooQpUEaOBzupC7-OwREtBRz16niu2nDtlq95HXkBgKyethex5Mq"
      target="_blank"
      className="group relative flex items-center justify-center opacity-60 hover:opacity-100 transition duration-700 overflow-hidden"
    >

      <img
        src="/images/golddealers.jpg"
        alt="GOLD DEALERS"
        className="h-28 md:h-36 object-contain grayscale group-hover:grayscale-0 transition duration-700 relative z-10"
      />

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-[1400ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

    </a>

    {/* EXTRA SLOT */}

    <div className="hidden md:block" />

    </div>

 </div>

 </div>

 </section>
 </Reveal>
 </FadeIn>

{/* CONTACT */}

      <FadeIn>
      

        <section
          id="contact"
          className="relative z-10 px-10 md:px-20 py-5 border-t border-white/10"
        >

          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24 items-start">

            <div>

              <p className="uppercase tracking-[0.4em] text-neutral-500 text-xs mb-6">
                Contact
              </p>

              <h2 className="text-5xl md:text-7xl font-extralight leading-[1] max-w-3xl">
                Let’s build
                something meaningful.
              </h2>

            </div>

            <div className="space-y-12">

              <div className="border-t border-white/10 pt-6">

                <p className="text-neutral-500 text-sm mb-3">
                  Email
                </p>
                <a
  href="mailto:your@email.com"
  className="
    flex
    items-center
    gap-5
    text-2xl
    md:text-4xl
    font-extralight
    hover:text-neutral-400
    transition
    duration-500
  "
>

  <img
    src="/images/mail.jpg"
    alt="Mail Icon"
    className="
      w-15
      h-15
      object-contain
      opacity-90
      flex-shrink-0
    "
  />

  <span>
    lucatoral2016@gmail.com
  </span>

</a>
                

               

              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-neutral-500 text-sm mb-3">
                  Instagram
                </p>

                <a
                  href="https://www.instagram.com/ltoral925/"
                  target="_blank"
                  className="text-2xl md:text-4xl font-extralight hover:text-neutral-400 transition duration-500"
                >
                  @ltoral925

                </a>

              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-neutral-500 text-sm mb-3">
                  Linkedin
                </p>

                <a
  href="https://www.linkedin.com/in/luca-toral-1735951b7/"
  target="_blank"
  className="
    text-2xl
    md:text-4xl
    font-extralight
    hover:text-neutral-400
    transition
    duration-700
    block
  "
>
Linkedin/luca-toral
</a> 

              </div>
              
              <div className="border-t border-white/10 pt-6">

                <p className="text-neutral-500 text-sm mb-3">
                 Location
                </p>

               <h3 className="text-2xl md:text-4xl font-extralight">
                 Barcelona, Spain
                </h3>

 </div>

            </div>

          </div>

        </section>

      </FadeIn>

    
    </main>
  );
}