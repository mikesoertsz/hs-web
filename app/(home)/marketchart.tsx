import { BarChart } from "@mui/x-charts/BarChart";

export function MarketChart() {
  return (
    <>
      {/* <BarChart
        series={[
          {
            label: "2018-2023 CAGR",
            data: [6.5, 7.0, 7.5, 8.5],
            color: "#081F5C",
          }, // Historical data from USD 6.5B to USD 8.5B with specified color
          {
            label: "2024-2032 Forecast",
            data: [8.5, 10.5, 14.5, 19.78],
            color: "#CDC19B",
          }, // Forecasted growth reaching USD 19.78B by 2032 with distinct color to indicate future
        ]}
        xAxis={[{ data: ["2018", "2023", "2028", "2032"], scaleType: "band" }]} // Adjusted for the given time frames
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      /> */}
      <BarChart
        series={[
          { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
          { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
          { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
          { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
          { data: [10, 6, 5, 8, 9], label: "Series C1" },
        ]}
        width={600}
        height={600}
      />
    </>
  );
}
