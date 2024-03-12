import { curve, heroBackground } from "../assets";
import blackholeVideo from "../assets/blackhole.webm";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Revolutionize Mobility with
            <span className="inline-block relative">
              BlackVox.ai{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 "
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            In the realm of mobility, we&apos;re setting new benchmarks for
            excellence.
          </p>
          <Button href="/About">Learn More</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="h-[1.4rem] bg-n-8 rounded-t-[0.9rem]" />
              <div className="rounded-b-[0.9rem] overflow-hidden ">
                <video width="100%" height="auto" autoPlay muted loop>
                  <source
                    src={blackholeVideo}
                    type="video/webm"
                    className="w-full"
                    width={1024}
                    height={490}
                    alt="blackhole"
                  />
                  Your browser does not support the video tag.
                </video>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"></ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Our app operates akin to a black hole, seamlessly aggregating nearby data. With BlackVox AI, personalized experiences are crafted through continuous refinement. "
                  />
                </ScrollParallax>
              </div>
            </div>
            {/* <Gradient /> */}
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="car hero background"
            />
          </div> */}
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
