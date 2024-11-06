import { InnerWrap, Wrapper } from "@/lib/atoms";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TitleBlock } from "@/components/ui/titleblock";

type Props = {};

export function InterestCorporateStructure({}: Props) {
  const leads = [
    "https://www.heritage.ch/en/fund-representation-swiss-paying-agent",
  ];
  const corporatestructure = {
    header: {
      icon: "", // Placeholder for actual icon path
      image: "", // Placeholder for actual image path
      preheading: "Understanding Our Foundation",
      heading: "Corporate & Tax Structure",
      subheading:
        "Diligently structured to ease tax and administrative burdens.",
      body: "Learn about the entities that form our corporate structure and how they interconnect to sustain our business operations and growth.",
    },
    entities: [
      {
        title: "General Partner",
        name: "HelmShare LLC",
        country: "Dubai, UAE",
        compliance: ["Dubai Financial Services Authority (DFSA)"],
      },
      {
        title: "Special Purpose Vehicle (SPV)",
        name: "HelmShare Prime LLC",
        country: "Cayman Islands",
        compliance: ["Cayman Islands Monetary Authority (CIMA)"],
      },
      {
        title: "Trust Issuer",
        name: "TBA",
        country: "Dublin, Ireland",
        compliance: ["Central Bank of Ireland"],
      },

      {
        title: "Payment Agent",
        name: "TBA",
        country: "Zurich, Switzerland",
        compliance: ["Swiss Financial Market Supervisory Authority (FINMA)"],
      },
      {
        title: "Counsel - Onshore",
        name: "TBA",
        country: "Dubai, UAE",
        compliance: ["Dubai Legal Affairs Department"],
      },
      {
        title: "Counsel - Offshore",
        name: "TBA",
        country: "Cayman Islands",
        compliance: ["Cayman Islands Legal Practitioners Association (CILPA)"],
      },
      {
        title: "Audit Partner",
        name: "Deloitte",
        country: "Global",
        compliance: [
          "International Standards on Auditing (ISA)",
          "Anti-Money Laundering (AML)",
          "Know Your Customer (KYC)",
        ],
      },
    ],
  };
  return (
    <Wrapper className="my-[10vh]">
      <InnerWrap className="flex flex-col w-full p-8 bg-white border rounded-2xl border-slate-200">
        <TitleBlock
          heading={corporatestructure.header.heading}
          subheading={corporatestructure.header.subheading}
          theme="light"
          orientation="center"
        />
        <Table>
          <TableCaption>
            <Badge variant="secondary">
              <sup>*</sup>currently in progress.
            </Badge>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Compliance Standards</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {corporatestructure.entities.map((entity, index) => (
              <TableRow
                key={index}
                className="text-xs transition duration-200 ease-in-out hover:bg-slate-50 md:text-sm"
              >
                <TableCell>{entity.title}</TableCell>
                <TableCell>
                  {entity.name}
                  <sup>*</sup>
                </TableCell>
                <TableCell>{entity.country}</TableCell>
                <TableCell>
                  {entity.compliance.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InnerWrap>
    </Wrapper>
  );
}
