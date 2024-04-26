import React from "react";
import tw from "tailwind-styled-components";

export const Wrapper = tw.section`mx-auto w-full snap-always snap-center mx-auto px-6 lg:px-0 relative z-20`;
export const InnerWrap = tw.div`mx-auto max-w-7xl w-full flex items-center justify-center flex-col`;
export const GreyBlock = tw.div`flex flex-col items-center justify-center w-full p-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm`;
export const SplitWrap = tw.div`mx-auto max-w-6xl px-6 md:px-0 w-full flex items-center justify-center gap-2`;

export const HeaderWrap = tw.div`flex flex-col items-center justify-center w-full bg-brand-p2 text-white z-10 text-center`;
export const HeaderWrapLeft = tw.div`flex flex-col items-start justify-start w-full md:justify-start md:text-left text-center`;
export const Icon = tw.div`flex items-start justify-start mb-3`;
export const ImageWrap = tw.div`relative w-10 h-10 py-4`;
export const PreHeading = tw.h4`uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1 w-full`;
export const Heading = tw.h2`max-w-xl text-4xl balanced font-title font-semibold pt-4 w-full`;
export const SubHeading = tw.h3`text-lg md:text-2xl lg:text-3xl tracking-tight balanced pt-2 font-semibold`;
export const Body = tw.p`max-w-prose text-sm font-body leading-relaxed pt-2`;

export const Left = tw.div`relative flex flex-col items-center justify-center w-full xl:w-1/2 min-h-full bg-brand-p2 text-white z-10 py-8 xl:p-12`;
export const Right = tw.div`relative flex items-center justify-center w-full xl:w-1/2 min-h-full z-10`;
