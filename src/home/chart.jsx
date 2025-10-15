// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const DeveloperDonutChart = () => {
//   const data = {
//     labels: [
//       "Java", ".Net", "ReactJS", "Angular", "Salesforce", "NodeJS",
//       "PHP", "Android", "DevOps", "iOS", "Flutter", "Drupal", "ASP.NET"
//     ],
//     datasets: [
//       {
//         label: "Developers",
//         data: [184, 177, 149, 145, 120, 99, 55, 51, 44, 39, 28, 19, 12],
//         backgroundColor: [
//           "#C96AA6", "#26A69A", "#00ACC1", "#3F51B5", "#4CAF50", "#8BC34A",
//           "#F06292", "#EF5350", "#9CCC65", "#90A4AE", "#AB47BC", "#FF9800", "#FF5722"
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       datalabels: {
//         color: "#fff",
//         font: {
//           weight: "bold",
//           size: 10,
//         },
//         anchor: "center",
//         align: "center",
//         formatter: (value, context) => {
//           const label = context.chart.data.labels[context.dataIndex];
//           return `${label}\n${value}`;
//         },
//       },
//     },
//     cutout: "50%",
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "700px",    
//       marginTop:"5px"   }}
//     >
//       <div style={{ width: "600px", height: "600px" }}>
//         <Doughnut data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default DeveloperDonutChart;
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DeveloperDonutChart = () => {
  const data = {
    labels: [
      "Java", ".Net", "ReactJS", "Angular", "Salesforce", "NodeJS",
      "PHP", "Android", "DevOps", "iOS", "Flutter", "Drupal", "ASP.NET"
    ],
    datasets: [
      {
        label: "Developers",
        data: [184, 177, 149, 145, 120, 99, 55, 51, 44, 39, 28, 19, 12],
        backgroundColor: [
          "#C96AA6", "#26A69A", "#00ACC1", "#3F51B5", "#4CAF50", "#8BC34A",
          "#F06292", "#EF5350", "#9CCC65", "#90A4AE", "#AB47BC", "#FF9800", "#FF5722"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // ✅ allows resizing
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 12 },
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
    cutout: "55%",
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center py-4"
      style={{
        maxWidth: "100%",
        overflow: "hidden", // ✅ prevents white space overflow
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90vw",        // ✅ fluid width: 90% of screen
          maxWidth: "400px",    // ✅ limit size on big screens
          aspectRatio: "1 / 1", // ✅ keep perfect circle
        }}
      >
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DeveloperDonutChart;
