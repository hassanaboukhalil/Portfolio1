import Link from "next/link";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Cover } from "../ui/cover";
import { Vortex } from "../ui/vortex";

const Hero = () => (
  <section className="my-container pt-20 md:pt-20 md:from-30% overflow-hidden">
    <Vortex
      backgroundColor="#030014"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full text-center"
    >
      <h1 className="h1 mb-6">
        Transforming Concepts into Seamless{" "}
        <span className="text-color-2">User Experiences</span>
      </h1>
      <div className="body-1 text-txtColor-1 mb-6 lg:mb-8 max-w-3xl mx-auto">
        <TextGenerateEffect words="Hi! I'm Hassan, a Full Stack Software Engineer with experience in Website, Mobile, and Software development." />
      </div>
      <Button className="bg-white text-black btn">
        <Link href="#">Show my work</Link>
      </Button>
    </Vortex>
  </section>
);

export { Hero };
