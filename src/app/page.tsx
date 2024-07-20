"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const heroPara=`
  Promptify is an open-source AI tool for modern generation to
  discover, create and share creative prompts!
`;

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full flex-col">
      <div>
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="text-center">
            <h1 className="font-bold text-4xl">
              Discover & Share
              <br className="max-md:hidden" />
              <span className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                AI Generated Prompts
              </span>
            </h1>
          </div>
        </BackgroundGradient>
      </div>

      <div className="max-w-4xl text-center mt-8">
        <TextGenerateEffect words={heroPara} />
      </div>
    </section>
  );
}
