import { Wrapper } from "@/lib/atoms";
import Image from "next/image";

export function DesireSeychelles() {
  return (
    <Wrapper className="min-h-[400px] relative">
      <Image
        src="/img/hero/hero21.JPG"
        alt="Hero Image"
        fill
        className="absolute inset-0"
        style={{ objectFit: "cover" }}
      />
    </Wrapper>
  );
}
