import AboutUsHeroSection from "@/components/aboutUsHeroSection";
import CoreTeam from "@/components/coreTeam";
import Header from "@/components/header";
import OurGoals from "@/components/ourGoals";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
        <Header page="about" />
        <AboutUsHeroSection/>
        <OurGoals/>
        <CoreTeam/>
    </div>
  )
}
