import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function BlogCategories({}: Props) {
  const categories = [
    {
      icon: "",
      title: "",
      description: "",
      articles: 0,
    },
  ];

  return (
    <Wrapper>
      <InnerWrap></InnerWrap>
    </Wrapper>
  );
}
