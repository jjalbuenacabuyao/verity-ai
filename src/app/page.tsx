import { FAQ, Features, Hero, Tutorials } from "@/components/home";

const Page = () => {
  return (
    <div className="px-6 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <Hero />
      <Features />
      <Tutorials />
      <FAQ />
    </div>
  );
};

export default Page;
