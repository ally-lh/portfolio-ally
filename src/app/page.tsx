import { Separator } from "@/components/ui/separator";
import HeaderWrapper from "../components/Header/headerWrapper";
import GalaxyBackground from "@/components/GalaxyBackground";
import SoftwareSection from "@/components/SoftwareSection";
import DesignSection from "@/components/DesignSection";
export default function Home() {
  return (
    <main className=" text-white">
      <GalaxyBackground>
        <HeaderWrapper />
        <Separator className="w-3/6 mx-auto my-7" />
        <SoftwareSection />
        <Separator className="w-3/6 mx-auto my-7" />
        <DesignSection />
      </GalaxyBackground>
    </main>
  );
}
