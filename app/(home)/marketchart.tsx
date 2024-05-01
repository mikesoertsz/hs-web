import { BarChart } from "@mui/x-charts/BarChart";

export function MarketChart() {
  return (
    <>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['2018', '2023', '2024', '2032'] }]}
        series={[
          { data: [6.5, 8.5, 8.5, 19.78], label: "Market Growth", color: "#CDC19B" }
        ]}
        width={800}
        height={550}
      />
    </>
  );
}
