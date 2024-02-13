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
  modules: {
    header: Titles;
    list: {
      title: string;
      subheading: string;
      duration: number;
    }[];
  };
  details: {
    primary: {
      label: string;
      value: string;
      icon: string | JSX.Element;
    }[];
    secondary: {
      label: string;
      value: string;
      icon: string | JSX.Element;
    }[];
  };
  testimonials: {
    header: Titles;
    list: {
      testimonial: string;
      name: string;
      role: string;
      company: string;
      image: string;
      age: string;
      location: string;
      motivation: string;
    }[];
  };
  whofor: {
    header: string | React.ReactNode;
    list: {
      icon: string | JSX.Element;
      title: string;
      description: string;
    }[];
  };
  coursefiles: {
    header: Titles;
    list: {
      icon?: string | JSX.Element;
      title: string;
      description: string;
    }[];
  };
  whatyoulearn: {
    title: string;
    beginnerlist: string[] | JSX.Element[];
    advancedlist: string[] | JSX.Element[];
  };
  requirements: {
    title: string;
    list: (string | JSX.Element)[];
    recommended: {
      icon: string | JSX.Element | React.ReactNode;
      text: string;
      url: string;
      price: number;
    }[];
  };
  instructor: {
    header: Titles;
    socials: {
      icon: string | JSX.Element;
      url: string;
    }[];
  };
  syllabus: {
    header: string | React.ReactNode;
    chapters: {
      free: boolean;
      title: string;
      description: string;
      sections: {
        preview: boolean;
        previewlink: string;
        type: string;
        title: string;
        duration: number;
      }[];
      totalduration: number;
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
