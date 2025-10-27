import SingleServiceSidebar from "@/components/singleService/SingleServiceSidebar";
import RightSideBar from "@/components/singleService/RightSideBar";
import ServiceData from "@/app/services/ServiceData.json";
import HeroSection from "@/components/singleService/HeroSection";
import DetailsSection from "@/components/singleService/DetailsSection";
import ImageSlider from "@/components/singleService/ImageSlider";

// ✅ Generate Static Params
export async function generateStaticParams() {
  return ServiceData.map((service) => ({
    slug: service.slug,
  }));
}

const Page = ({ params }) => {
  const { slug } = params;

  const matchedService = ServiceData.find((service) => service.slug === slug);

  if (!matchedService) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center text-red-500">
        <h2 className="text-2xl font-semibold">Service Not Found 😕</h2>
      </div>
    );
  }

  return (
    <>
      <HeroSection service={matchedService} />
      <div className="md:flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-[30%] md:sticky md:top-[100px] self-start h-fit">
          <SingleServiceSidebar service={matchedService} />
        </div>

        {/* Right SideBar / Main Content */}
        <div className="w-full md:w-[70%] md:sticky md:top-[100px] self-start h-fit">
          <RightSideBar service={matchedService} />
        </div>
      </div>

      <DetailsSection service={matchedService} />
      <ImageSlider service={matchedService} />
    </>
  );
};

export default Page;
