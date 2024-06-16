import { Wrapper } from "@/lib/atoms";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

export default function ImageWide({ image }: Props) {
  return (
    <Wrapper className="min-h-[40dvh] relative">
      <Image
        src={image}
        alt="Marketing image"
        fill
        className="absolute inset-0"
        style={{ objectFit: "cover" }}
      />
    </Wrapper>
  );
}
