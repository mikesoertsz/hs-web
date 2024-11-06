import { InnerWrap, Wrapper } from "@/lib/atoms";

import Image from "next/image";

type Props = {};

export function InterestRiskProfile({}: Props) {
  const leadership = [
    {
      name: "Mike Soertsz",
      image: "/img/mike.jpg",
      details: "Principle Fund Manager",
      location: "Porto, Portugal",
    },
  ];
  return (
    <Wrapper className="py-[5vh] bg-white">
      <InnerWrap className="p-8 border border-slate-200 rounded-xl">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-2xl font-medium">Fund Leadership</h1>
            <p>
              Investment.yachts is led by Mike Soertsz, a seasoned entrepreneur
              & sailor with a history of building deep tech in the finance and
              banking sectors. Mike has assembled a team of experienced
              professionals in the maritime, investment management, finance, and
              technology sectors to develop this fund.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-1 gap-4">
              {leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start w-full overflow-hidden border rounded-xl border-slate-200"
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full p-4">
                    <h3 className="text-lg font-medium tracking-tight text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-left text-gray-700">
                      {item.details}
                    </p>
                    <p className="pt-1 text-xs text-left text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
