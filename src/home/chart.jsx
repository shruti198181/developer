import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DeveloperBenchSection = () => {
  const data = {
    labels: [
      "Java", ".Net", "ReactJS", "Angular", "Salesforce", "NodeJS",
      "PHP", "Android", "DevOps", "iOS", "Flutter", "Drupal", "ASP.NET",
    ],
    datasets: [
      {
        label: "Developers",
        data: [184, 177, 149, 145, 120, 99, 55, 51, 44, 39, 28, 19, 12],
        backgroundColor: [
          "#C96AA6", "#26A69A", "#00ACC1", "#3F51B5", "#4CAF50", "#8BC34A",
          "#F06292", "#EF5350", "#9CCC65", "#90A4AE", "#AB47BC", "#FF9800", "#FF5722",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 14,
          padding: 10,
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 9,
        },
        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}`;
        },
      },
    },
    cutout: "55%", // keeps inner circle nice and clean
  };

  return (
    <section
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
        padding: "30px 10px", // ✅ reduced top-bottom padding
        margin: "0 auto",
      }}
    >
      {/* Heading Section */}
      <h2
        style={{
          fontWeight: "700",
          fontSize: "2.2rem",
          color: "#0E8A00",
          margin: "0",
        }}
      >
        1000+
      </h2>
      <p
        style={{
          fontSize: "1.0rem",
          color: "#333",
          fontWeight: "500",
          marginBottom: "20px",
          marginTop: "5px",
        }}>
        Developers Available on Bench
      </p>
      {/* Donut Chart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80vw",        // ✅ responsive width
            maxWidth: "380px",    // ✅ perfect size on large screens
            height: "380px",
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <button className="bg-success w-75 h-25 mt-2 text-light">Technologies</button>
    </section>
  );
};

export default DeveloperBenchSection;
