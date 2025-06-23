import React from "react";
import { Chart } from "react-chartjs-2";
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

function getChartColors(isDark) {
  return {
    borderColor: isDark ? "#23272e" : "#bdbdbd",
    backgroundColor: isDark ? "rgba(243, 244, 246, 0.7)" : "rgba(35, 39, 46, 0.7)",
    pointBackgroundColor: isDark ? "#23272e" : "#bdbdbd",
    pointBorderColor: isDark ? "#23272e" : "#bdbdbd",
    grid: isDark ? "#bdbdbd" : "#23272e",
    ticks: isDark ? "#23272e" : "#f3f4f6",
    legend: isDark ? "#23272e" : "#f3f4f6",
  };
}

export default function MoodHistory({ entries }) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  const chartColors = getChartColors(isDark);

  const chartData = {
    labels: entries.map((entry) => entry.date),
    datasets: [
      {
        label: "Mood (1-5)",
        data: entries.map((entry) => entry.mood),
        borderColor: chartColors.borderColor,
        backgroundColor: chartColors.backgroundColor,
        tension: 0.3,
        pointBackgroundColor: chartColors.pointBackgroundColor,
        pointBorderColor: chartColors.pointBorderColor,
        pointRadius: 6,
        pointHoverRadius: 10,
        fill: true,
        borderWidth: 4,
        shadowColor: '#bdbdbd',
      },
    ],
  };

  return (
    <div className={`relative p-8 shadow-2xl rounded-2xl overflow-hidden animate-fade-in border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
      <h2 className="mb-4 text-2xl font-extrabold">Your Mood History</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Add your first mood entry!</p>
      ) : (
        <>
          <div className={`h-64 mb-6 rounded-xl shadow-lg p-2 flex items-center justify-center border-2 ${isDark ? 'bg-[#f3f4f6] text-[#23272e] border-[#bdbdbd]' : 'bg-[#23272e] text-[#f3f4f6] border-[#23272e]'}`}>
            <Chart
              type="line"
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    min: 1,
                    max: 5,
                    ticks: {
                      stepSize: 1,
                      color: chartColors.ticks,
                    },
                    grid: {
                      color: chartColors.grid,
                    },
                  },
                  x: {
                    ticks: {
                      color: chartColors.ticks,
                    },
                    grid: {
                      color: chartColors.grid,
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: chartColors.legend,
                      font: { weight: 'bold', size: 16 },
                    },
                  },
                },
              }}
            />
          </div>
          <div className="space-y-4">
            {entries
              .slice()
              .reverse()
              .map((entry, index) => (
                <div key={index} className={`pb-4 border-b last:border-0 border-2 ${isDark ? 'border-[#bdbdbd] bg-[#f3f4f6] text-[#23272e]' : 'border-[#23272e] bg-[#23272e] text-[#f3f4f6]'} rounded-xl p-3`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{entry.date}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs 
                    ${
                      entry.mood <= 2
                        ? isDark ? 'bg-red-200 text-red-900' : 'bg-red-900 text-red-200'
                        : entry.mood >= 4
                        ? isDark ? 'bg-green-200 text-green-900' : 'bg-green-900 text-green-200'
                        : isDark ? 'bg-yellow-200 text-yellow-900' : 'bg-yellow-900 text-yellow-200'
                    }`}
                    >
                      Mood: {entry.mood}/5
                    </span>
                  </div>
                  {entry.journal && (
                    <p>{entry.journal}</p>
                  )}
                  {entry.sentiment && (
                    <p className="mt-1 text-sm">
                      Sentiment: {entry.sentiment}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
