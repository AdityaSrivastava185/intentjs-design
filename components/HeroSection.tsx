import React from "react";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div className="mx-auto w-full px-6 md:px-10 py-32 sm:py-48 lg:py-20 sm:border-b-2 sm:border-dotted sm:border-zinc-550">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-jetmono mt-10">
          <Badge className="bg-[#417E38] text-white border-2 border-green-500">
            {" "}
            🚀 Intent v0.1.35 released <ArrowRight className="px-1" />{" "}
          </Badge>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <h1 className="text-5xl md:text-8xl font-bold ">
            It's like Laravel,
            <br />
            but for <span className="text-green-400">NodeJS</span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <p className="font-jetmono text-md md:text-xl">
            A refreshing take on traditional Node.js frameworks, change the way
            you build your products. <span className="text-green-400">Intent</span> is an open-source framework with a
            focus on productivity and developer experience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:gap-10 gap-4 mt-4">
          <Button className="bg-green-400 text-green-950 font-bold">
            <Link href="#">Get Started</Link>
          </Button>
          <Button variant="secondary">
            <Link href="#">Github</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
