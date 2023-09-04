import { Features, Hero, Tutorials } from "@/components";

const Page = () => {
  return (
    <div className="grid gap-12 px-6 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <Hero />
      <Features />
      <Tutorials />
    </div>
  );
};

export default Page;
