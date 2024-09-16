import Link from "next/link";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Cover } from "../ui/cover";
import { Vortex } from "../ui/vortex";

const Hero = () => (
  <section className="my-container flex items-center justify-center  md:pt-20 md:from-30% overflow-hidden h-screen">
    <Vortex
      backgroundColor="#030014"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full text-center"
      baseRadius={2}
      baseHue={250}
      rangeY={200}
    >
      <h1 className="h1 pt-4">
        Transforming Concepts into Seamless{" "}
        <span className="text-color-2">User Experiences</span>
      </h1>
      <div className="body-1 text-txtColor-1 pt-9 lg:mb-8 max-w-3xl mx-auto">
        <TextGenerateEffect words="Hi! I'm Hassan, a Full Stack Software Engineer with experience in Web, Mobile, and Software development." />
      </div>
      <Button className="bg-white text-black btn text-sm mt-9">
        <Link href="#">Show my work</Link>
      </Button>
    </Vortex>
  </section>
);

export { Hero };
