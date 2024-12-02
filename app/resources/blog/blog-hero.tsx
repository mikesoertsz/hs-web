import { Wrapper } from "@/lib/atoms";

type Props = {};

export default function BlogHero({}: Props) {
  return (
    <Wrapper className="pt-[5dvh]">
      <div className="flex flex-col items-center justify-center min-h-full">
        <h1 className="text-5xl font-medium tracking-tighter text-slate-800">
          Articles
        </h1>
        <p className="text-lg text-slate-600 mt-4">
          Discover insights, stories, and updates on the charter yacht industry.
        </p>
      </div>
    </Wrapper>
  );
}
