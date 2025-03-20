import { Heading, SubHeading, Wrapper } from "@/lib/atoms";

type Props = {};

export default function BlogHero({}: Props) {
  return (
    <Wrapper className="pt-[5dvh]">
      <div className="flex flex-col items-center justify-center min-h-full">
        <Heading>Articles</Heading>
        <SubHeading>
          Discover insights, stories, and updates on the charter yacht industry.
        </SubHeading>
      </div>
    </Wrapper>
  );
}
