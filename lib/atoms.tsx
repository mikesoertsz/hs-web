import React from "react";
import tw from "tailwind-styled-components";

export const Wrapper = tw.section`mx-auto w-full py-[4vh] snap-always snap-center mx-auto px-6 lg:px-0 relative z-20`;
export const InnerWrap = tw.div`mx-auto max-w-7xl w-full flex items-center justify-center flex-col `;
export const GreyBlock = tw.div`flex flex-col items-center justify-center w-full p-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm`;
export const SplitWrap = tw.div`mx-auto max-w-6xl px-6 md:px-0 w-full flex items-center justify-center gap-2`;

export const Icon = tw.div`flex items-start justify-start mb-3`;
export const ImageWrap = tw.div`relative w-10 h-10 py-4`;
export const PreHeading = tw.h4`uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1`;
export const Heading = tw.h2`max-w-4xl font-title font-light text-5xl balanced tracking-tight py-3`;
export const SubHeading = tw.h3`text-2xl md:text-3xl tracking-tight balanced`;
export const Body = tw.p`max-w-prose text-sm font-body leading-relaxed`;
