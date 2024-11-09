"use client";

import Landing from "@/components/Landing";
import { Background } from "@/components/ui/backgroung";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["a Dapp or", "a Smart Contact or", "a website or"];
  return (
    <div>
      <Background>
        <div className="flex mt-20">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            <p>{"<Hello, World!>"}</p>
            <p>{"I'm Raghavender"}</p>
            <p>
              Currently devloping{" "}
              <FlipWords
                words={words}
                className="text-neutral-600 dark:text-neutral-400"
              />{" "}
            </p>
          </div>
        </div>

        <Landing />
      </Background>
    </div>
  );
}
