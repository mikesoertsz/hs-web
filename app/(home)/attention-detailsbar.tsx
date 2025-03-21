import { InnerWrap, Wrapper } from "@/lib/atoms";

export function AttentionDetailsBar() {
  const details = [
    {
      pretitle: "risk class",
      title: "Low Risk",
      description: "Investment only into tangible, cashflowing assets.",
      icon: "",
      value: "",
    },
    {
      pretitle: "Fixed Yield",
      title: (
        <>
          8% Guaranteed
          <sup>
            <a
              href="#disclaimer-section"
              className="pl-[2px] text-brand-p1 text-xs"
            >
              1
            </a>
          </sup>
        </>
      ),
      description: "Secure 8% returns, paid out regularly.",
      icon: "",
      value: "",
    },
    {
      pretitle: "Performance Yield",
      title: "11.75% projected",
      description: (
        <>
          Projected annualized
          <sup>
            <a
              href="#disclaimer-section"
              className="pl-[2px] text-brand-p1 text-[9px]"
            >
              2
            </a>
          </sup>{" "}
          carried interest paid at end of term.
        </>
      ),
      icon: "",
      value: "",
    },
    {
      pretitle: "ticket size",
      title: "€100,000",
      description: "Investment entry at €100k minimum.",
      icon: "",
      value: "",
    },
    {
      pretitle: "term",
      title: "6 years",
      description: "Standard closed-fund structure with long term stability.",
      icon: "",
      value: "",
    },
  ];
  return (
    <Wrapper className="py-4 pb-12 ">
      <InnerWrap className="bg-white shadow-md border border-slate-200 rounded-lg p-4">
        <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-5">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-start w-full p-3 rounded-lg border-0 border-slate-300 last:border-0 md:border-r"
            >
              <p className="text-[9px] uppercase font-semibold tracking-[0.1em] text-slate-600">
                {item.pretitle}
              </p>
              <div className="mt-1 text-lg font-medium">{item.title}</div>
              <div className="text-xs text-left text-gray-600">
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
