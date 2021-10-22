
import CallToAction from "./CallToAction/CallToAction";
import Features from "./Features/Features";
import IconSection from "./IconSection/IconSection";
import ChoosePlans from "./ChoosePlans/ChoosePlans";
import GetStarted from "./GetStarted/GetStarted";
import Brands from "../Brands/Brands";
import TrustedBy from "./TrustedBy/TrustedBy";
import Testimonial from "./Testimonial/Testimonial";
import Arrow from "./Arrows/Arrow";
import Subscribers from "./Subscribers/Subscribers";

export default function Home() {
  return (
    <>
      <div className="container">
        <CallToAction />
        <IconSection />
        <Features />
        <ChoosePlans />
        <GetStarted />
        <Brands />
        <TrustedBy />
      </div>
      <Testimonial />
      <div className="container">
        <Arrow />
        <Subscribers />
      </div>
    </>
  );
}
