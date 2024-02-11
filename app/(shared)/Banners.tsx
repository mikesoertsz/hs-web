import { Attention } from "@/lib/types";
import React from "react";

type Props = {
  content: {
    narrow: {
      text: string | string[] | React.ReactNode | React.ReactNode[];
      url?: string;
    };
  };
};

export function BannerThin({ banner }: Attention) {
  return (
    <div className="relative z-20 flex items-center justify-center w-full h-8 top-12 bg-gradient-to-b from-yellow-300 to-yellow-300">
      <h5 className="items-center px-4 mx-auto text-xs font-medium tracking-wide text-left text-black uppercase max-w-7xl">
        {banner}
      </h5>
    </div>
  );
}
