import React from "react";

type Props = {};

export default function CTAButtonsBasic({}: Props) {
  return (
    <div className="flex items-center justify-center gap-2 p-12">
      <a
        href="#cta"
        className="mt-12 border border-brand-g1 rounded-lg py-3 px-6 text-sm font-medium transition duration-200 ease-in-out hover:bg-brand-p3 bg-brand-p3 flex text-brand-p2"
      >
        Download Prospectus
      </a>
      <button className="mt-12 border border-slate-300 rounded-lg py-3 px-6 text-sm transition duration-200 ease-in-out">
        <a href="#cta">Watch video (1min)</a>
      </button>
    </div>
  );
}
