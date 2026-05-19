import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";
import { Fleet } from "@/components/Fleet";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Trust } from "@/components/Trust";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Pierson Carwash · Mississauga, Ontario · Heavy-Duty Commercial Wash",
      },
      {
        name: "description",
        content:
          "Professional truck wash, fleet washing, and car wash services in Mississauga, Ontario. Heavy-duty commercial vehicle cleaning, undercarriage wash, and high-pressure detail built for Ontario roads.",
      },
      {
        name: "keywords",
        content:
          "Truck Wash Mississauga, Commercial Truck Wash Ontario, Fleet Wash Services, Heavy Duty Vehicle Cleaning, Car Wash Mississauga, Fleet Cleaning Ontario, Professional Truck Wash, Commercial Vehicle Cleaning",
      },
      { property: "og:title", content: "Pierson Carwash · Mississauga" },
      {
        property: "og:description",
        content:
          "Heavy-Duty Cleaning. Premium Results. Truck and fleet wash services in Mississauga, Ontario.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoWash",
          name: "Pierson Carwash",
          image: "/og.jpg",
          telephone: "905-672-1635",
          email: "jasjitchohan@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "6771 Columbus Road, Unit 12",
            addressLocality: "Mississauga",
            addressRegion: "ON",
            postalCode: "L5T2J9",
            addressCountry: "CA",
          },
          areaServed: "Mississauga, Ontario",
          priceRange: "$$",
          openingHours: ["Mo-Su 07:00-21:00"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Services />
      <Technology />
      <Fleet />
      <Process />
      <Gallery />
      <Trust />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
