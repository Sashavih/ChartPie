import "./PieChart.css";
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ pieData, state }) {
    const [userPieData] = useState({
        labels: pieData.map((dataItem) => dataItem.name + "  " + dataItem.count),
        datasets: [
            {
                label: "Статистика осмотров",
                data: pieData.map((pieDataItem) => pieDataItem.count),
                backgroundColor: pieData.map(
                    (pieDataItem) => pieDataItem.color
                ),
                borderWidth: 0,
                cutout: "60%",
            },
        ],
    });

    const [textCenter] = useState({
        id: "textCenter",
        beforeDatasetsDraw: (chart) => {
            const { ctx, data } = chart;

            ctx.save();
            ctx.fillStyle = "white";
            ctx.font = "bolder 16px Inter";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
                data.datasets[0].data.reduce((sum, item) => sum + item, 0),
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            );
        },
    });

    return (
        <>
            {(() => {
                switch (state) {
                    case 1:
                        return (
                            <Doughnut
                                data={userPieData}
                                plugins={[textCenter]}
                            />
                        );
                    case 2:
                        return (
                            <Doughnut
                                data={userPieData}
                                plugins={[textCenter]}
                            />
                        );
                    case 3:
                        return (
                            <Doughnut
                                data={userPieData}
                                plugins={[textCenter]}
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </>
    );
}

export default PieChart;