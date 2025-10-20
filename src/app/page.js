import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import HomeAboutUs from "@/components/homeAboutUs";
import HomeOurEvent from "@/components/homeOurEvent";
import JoinUs from "@/components/joinUs";
//import your component here

export default function Home() {
  
  return (
    <div>
      <Header page="home"/>
      <HeroSection/>
      <HomeAboutUs/>
      <HomeOurEvent/>
      <JoinUs/>
    </div>
  );
}
