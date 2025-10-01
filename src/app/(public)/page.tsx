import {
  CTA,
  FeaturesOverview,
  Footer,
  Header,
  Hero,
  Pricing,
  Stats,
  TemplateShowcase,
} from "@/features/landing";

const Page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <FeaturesOverview />
      <TemplateShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
