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
          "1st Choice Truck & Car Wash · Whitecourt, Alberta · Heavy-Duty Commercial Wash",
      },
      {
        name: "description",
        content:
          "Professional truck wash, fleet washing, and car wash services in Whitecourt, Alberta. Heavy-duty commercial vehicle cleaning, undercarriage wash, and high-pressure detail built for Alberta roads.",
      },
      {
        name: "keywords",
        content:
          "Truck Wash Whitecourt, Commercial Truck Wash Alberta, Fleet Wash Services, Heavy Duty Vehicle Cleaning, Car Wash Whitecourt, Fleet Cleaning Alberta, Professional Truck Wash, Commercial Vehicle Cleaning",
      },
      { property: "og:title", content: "1st Choice Truck & Car Wash · Whitecourt" },
      {
        property: "og:description",
        content:
          "Heavy-Duty Cleaning. Premium Results. Truck, fleet, and car wash services in Whitecourt, Alberta.",
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
          name: "1st Choice Truck and Car Wash",
          image: "/og.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3530 Kepler Street",
            addressLocality: "Whitecourt",
            addressRegion: "AB",
            addressCountry: "CA",
          },
          areaServed: "Whitecourt, Alberta",
          priceRange: "$$",
          openingHours: ["Mo-Fr 07:00-21:00", "Sa 08:00-18:00", "Su 09:00-17:00"],
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
