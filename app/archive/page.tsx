import Image from "next/image";
import Link from "next/link"; 

const projects = [
  "000","001","002","003","004","005","006","007","008","009",
  "010","011","012","013","014","015","016","017","018","019",
  "020","021","022","023","024","025","026","027","028","029",
  "030","031","032","033","034","035","036","037", 
];

const projectInfo: Record<
  string,
  {
    category: string;
    title: string;
    description: string;
  }
> = {
  "000": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant and chain for LA DIFERENCIA 2006.",
  },
  "001": {
    category: "",
    title: "ESTRELLA DAMM 25",
    description: "Bottle opener ring for Estrella Damm.",
  },
  "002": {
    category: "",
    title: "TWO JEYS LINKS",
    description: "Exploration of stacked LINK and different surface finishes.",
  },
  "003": {
    category: "",
    title: "VINSI 72 BRACALET",
    description: "Collaboration and production of 10 silver bracalets with VINSI 72.",
  },
  "004": {
    category: "",
    title: "Stack Rings",
    description: "Exploration of silverstacked rings and premium surface finishes.",
  },
  "005": {
    category: "",
    title: "Giant Gold Bust",
    description: "Gold Custom Sculpture pendant for Gold Dealers.",
  },
  "006": {
    category: "",
    title: "TWO JEYS LOVE ME NOT 25-26",
    description: "Two Jeys Saint Valentine's Day 2025-2026 Development.",
  },
  "007": {
    category: "",
    title: "SAGRADA FAMILIA GD",
    description: "Huge Gold Dealers Sagrada Familia pendant for exhibition in Barcelona flagship store.",
  },
  "008": {
    category: "",
    title: "TWO JEYS X GQ",
    description: "GQ Ring for Man of the year 2026"
  },
  "009": {
    category: "",
    title: "CAINTE GOLD COLLECTION",
    description: "Gold pendant part of the collection for CAINTE Denmark brand 2023.",
  },
  "010": {
    category: "",
    title: "CHEETAH BELT BUCKLE",
    description: "Development of the hard surface for all the TJ Buckles .",
  },
  "011": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant development for customer.",
  },
  "012": {
    category: "",
    title: "COLD CULTURE BELT",
    description: "Development London pop up belt with enamelt.",
  },
  "013": {
    category: "",
    title: "TJ PREMIUM COLLECTION 24",
    description: "Premium collection FW 2024, developed at D'or Joiers",
  },
  "014": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant development for customer.",
  },
  "015": {
    category: "",
    title: "COLD CULTURE LIGHTER",
    description: "Development of Kevil the devil figure of CC; and lighter holder.",
  },
  "016": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant development for artist JC REYES.",
  },
  "017": {
    category: "",
    title: "TJ LINK EARRING",
    description: "Enameld arring for ISLA BONITA 26.",
  },
  "018": {
    category: "",
    title: "CAS DEIA HERITAGE 1",
    description: "Full collection for CAS DEIA Heritage 2024.",
  },
  "019": {
    category: "",
    title: "TJ GOLD RING",
    description: "First available gold ring in Two Jeys, part of the premium collection FW 2024.",
  },
  "020": {
    category: "",
    title: "TJ EARCUFF",
    description: "Development of earcuff for the collection ISLA BONITA 26.",
  },
  "021": {
    category: "",
    title: "GD Artworks",
    description: "Artworks for Gold Dealers.",
  },
  "022": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant development for athlete.",
  },
  "023": {
    category: "",
    title: "TJ GOLD PROJECT",
    description: "Full collection of gold project for TJ in 2025.",
  },
  "024": {
    category: "",
    title: "ESTRELLA DAMM 26",
    description: "Belt Opener for estrella Damm 26.",
  },
  "025": {
    category: "",
    title: "CUSTOM RING",
    description: "Classic custom ring made in my atelier in Barcelona.",
  },
  "026": {
    category: "",
    title: "CAS DEIA HERITAGE 2",
    description: "Full collection for CAS DEIA Heritage 2 2025.",
  },
  "027": {
    category: "",
    title: "GD RENDER",
    description: "Visualization for customer before buying.",
  },
  "028": {
    category: "",
    title: "SCUFFERS BELT",
    description: "Development of the hard surface for all the SCUFFERS Buckles.",
  },
  "029": {
    category: "",
    title: "GD CUSTOM PENDANT",
    description: "Custom pendant development for .",
  },
  "030": {
    category: "TJ SILVER COAST 26",
    title: "",
    description: "One of the development for Silver Coast TJ 26.",
  },
  "031": {
    category: "",
    title: "TJ ISLA BONITA 26",
    description: "One of the pendnat for TJ ISLA BONITA 26 .",
  },
  "032": {
    category: "",
    title: "GD Rosary",
    description: "Rosary drop development for Gold Delaers.",
  },
  "033": {
    category: "",
    title: "COLD CULTURE ROSARY",
    description: "Best Sellers from the 2025 coleection .",
  },
  "034": {
    category: "",
    title: "TJ CHINESE CHOPSTICKS",
    description: "Goods accessory for FW25.",
  },
  "035": {
    category: "",
    title: "TJ RING",
    description: "one of the Ring FW24 TJ collection .",
  },
  "036": {
    category: "",
    title: "GD RENDER",
    description: "Visualization for customer before buying.",
  },
  "037": {
    category: "",
    title: "TJ Moneyclip",
    description: "Goods accessory for FW24.",
  },
};

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-32 pb-32">

      <div className="absolute top-10 left-10 md:left-16 z-50">
  <Link
    href="/"
    className="group block transition-opacity duration-300 hover:opacity-80"
  >
    <Image
      src="/logo.png"
      alt="Luca Toral"
      width={120}
      height={120}
      priority
    />
  </Link>
</div>
    
        {/* HEADER */}

        <div className="flex flex-col items-center text-center mb-24">

          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500 mb-5">
            LUCA TORAL SIMONELLI
          </p>

          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight">
            Archive
          </h1>

          <p className="mt-8 max-w-2xl text-neutral-500 leading-relaxed">

A selection of product developments
from fashion jewelry to bespoke
high jewelry.
          </p>

        </div>

        {/* GALLERY */}

        <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4 gap-6">

          {projects.map((image) => (

            <div
              key={image}
              className="
                group
                relative
                mb-6
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                bg-neutral-950
                cursor-pointer
              "
            >

<Image
  src={`/archive/${image}.jpg`}
  alt={`Project ${image}`}
  width={1400}
  height={1400}
  unoptimized
  className="
    w-full
    h-auto

    transition-all
    duration-700
    ease-[cubic-bezier(.22,.61,.36,1)]

    group-hover:scale-[1.04]
    group-hover:brightness-110
  "
/>

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/85
                  via-black/25
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              />

              {/* TEXT */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0

                  p-8

                  opacity-0
                  translate-y-6

                  group-hover:opacity-100
                  group-hover:translate-y-0

                  transition-all
                  duration-500
                "
              >

                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-3">

                  {projectInfo[image]?.category ?? "Portfolio"}

                </p>

                <h3 className="text-2xl font-light mb-3">

                  {projectInfo[image]?.title ?? `Project ${image}`}

                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">

                  {projectInfo[image]?.description ??
                    "Product development from concept to production."}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>
    </main>
  );
}