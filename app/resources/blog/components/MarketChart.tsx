"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MarketChartProps {
  data: Array<{
    year: number;
    value: number;
  }>;
  label: string;
}

export default function MarketChart({ data, label }: MarketChartProps) {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label,
        data: data.map((d) => d.value),
        borderColor: "rgb(75, 85, 99)",
        backgroundColor: "rgba(75, 85, 99, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={chartData} options={options} />
    </div>
  );
}
