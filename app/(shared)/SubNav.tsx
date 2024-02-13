import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function SubNav({}: Props) {
  return (
    <nav className="flex w-full bg-zinc-50 mt-12 py-2 px-8 border-t border-slate-200">
      <ul className="flex gap-2 items-center justify-center w-full">
        <li>
          <Button variant="outline" className="text-xs">
            Details
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Opportunity
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Risk
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Overview
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Market
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Potential
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Docs
          </Button>
        </li>
        <li>
          <Button variant="outline" className="text-xs">
            Content
          </Button>
        </li>
      </ul>
    </nav>
  );
}
