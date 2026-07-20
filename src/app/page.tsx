"use client";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import TextType from "@/components/TextType";
import { useState } from "react";
import AsciiWave from "@/components/lightswind/ascii-wave"


/* Home */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  return (
    <div
      className="min-h-screen  flex flex-col overflow-auto bg-black text-green-500"
      id="main-container"
    >
      <div className="flex-1 flex items-center justify-center">
        <TextType
          text={["WORKING IN PROGRESS", "STAY TUNED!"]}
          typingSpeed={100}
          pauseDuration={1500}
          className="text-2xl"
        />
      </div>

      <div className="w-full h-75 bg-black rounded-lg">
        <AsciiWave
          color="#097316"
          speed={0.1}
        />
      </div>
    </div>
  );
}
