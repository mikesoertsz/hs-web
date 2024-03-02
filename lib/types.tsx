export type Titles = {
  icon?: React.ReactNode;
  image?: string;
  preheading?: string;
  heading?:
    | React.ReactNode[]
    | React.ReactNode
    | string
    | string[]
    | JSX.Element;
  subheading?: string | React.ReactNode | string[] | JSX.Element;
  body?: string | React.ReactNode | React.ReactNode[];
};

export type CTASmall = {
  preheading: string;
  header: string;
  subheading: string;
  button: {
    text: string;
    link: string;
    icon: string | JSX.Element | React.ReactNode;
  };
}[];

// AIDA framework Landing page content
export type Attention = {
  hero: {
    header: Titles;
  };
  banner: string;
  agitate: {
    header: Titles;
  };
  // breadcrumbs: {
  //   label: string;
  //   href: string;
  //   color?: string;
  // }[];
  // valueprop: any;
  // trustbadges: any[];
};

export type Interest = {
  // disclaimer?: {
  //   terms?: string[];
  // };
  behindtheinvestment: {
    feestructure: {
      title: string;
      description: string;
      percentage: number;
      width: number;
    };
  };
  // luxuryCharterMarket: {
  //   title: string | React.ReactNode;
  //   dataPoints: {
  //     description: string;
  //     projection?: string;
  //     cagr?: string;
  //     source: string;
  //     keyCountries?: string;
  //   }[];
  // };
  corporatestructure: {
    header: Titles;
    entities: {
      title: string;
      name: string;
      country: string;
      compliance: string[];
    }[];
  };
};

export type Desire = {
  faq: {
    header: Titles;
    questions: {
      question: string;
      answer: string | string[];
      value: string;
    }[];
  };
  // bonus: {
  //   preheading: string;
  //   heading: string;
  //   subheading: string;
  //   icon: string;
  //   image: string;
  // };
};

export type Action = {
  nextevent: {
    header: Titles;
  };
  cta: {
    header: Titles;
  };
  pricing: {
    header: Titles;
    list: {
      icon?: string;
      imgHeight?: string;
      imgWidth?: string;
      title?: string;
      description?: string;
      price: number;
      discountedprice: number;
      pricefrequency?: string;
      subtitle?: string;
      included?: string[];
      whofor?: string;
      slots?: number;
      slotsleft?: number;
      option?: string;
      details?: string[];
      button?: {
        text?: string;
        link?: string;
        state?: boolean | string | string[];
      };
    }[];
  };
};

export type Course = {
  coursefiles: {
    icon: string;
    title: string;
    description: string;
  }[];
  // courseoutcome: any;
};
