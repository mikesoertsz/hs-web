"use client";

import React from "react";

interface Risk {
  type: string;
  impact: "Low" | "Medium" | "High";
  probability: "Low" | "Medium" | "High";
}

interface RiskMatrixProps {
  risks: Risk[];
}

const impactLevels = ["Low", "Medium", "High"] as const;
const probabilityLevels = ["Low", "Medium", "High"] as const;

const getColor = (impact: string, probability: string) => {
  if (impact === "High" && probability === "High")
    return "bg-red-100 border-red-500";
  if (impact === "High" || probability === "High")
    return "bg-orange-100 border-orange-500";
  if (impact === "Medium" && probability === "Medium")
    return "bg-yellow-100 border-yellow-500";
  return "bg-green-100 border-green-500";
};

export default function RiskMatrix({ risks }: RiskMatrixProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-2 p-4 bg-gray-50 rounded-lg">
        <div className="col-span-1"></div>
        {impactLevels.map((level) => (
          <div key={level} className="text-center font-medium text-sm">
            {level} Impact
          </div>
        ))}
        {probabilityLevels.map((prob) => (
          <React.Fragment key={prob}>
            <div className="font-medium text-sm">{prob} Probability</div>
            {impactLevels.map((impact) => {
              const cellRisks = risks.filter(
                (r) => r.impact === impact && r.probability === prob
              );
              return (
                <div
                  key={`${prob}-${impact}`}
                  className={`p-2 border rounded-lg ${getColor(
                    impact,
                    prob
                  )} min-h-[100px]`}
                >
                  {cellRisks.map((risk) => (
                    <div key={risk.type} className="text-xs mb-1">
                      {risk.type}
                    </div>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-red-100 border border-red-500 rounded-lg">
          <h4 className="font-medium mb-2">High Risk</h4>
          <p className="text-sm">Immediate action required</p>
        </div>
        <div className="p-4 bg-orange-100 border border-orange-500 rounded-lg">
          <h4 className="font-medium mb-2">Medium Risk</h4>
          <p className="text-sm">Monitoring and mitigation needed</p>
        </div>
        <div className="p-4 bg-green-100 border border-green-500 rounded-lg">
          <h4 className="font-medium mb-2">Low Risk</h4>
          <p className="text-sm">Regular review sufficient</p>
        </div>
      </div>
    </div>
  );
}
