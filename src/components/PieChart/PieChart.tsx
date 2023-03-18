import "./PieChart.css";
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { options1, options2, options3 } from "./PieChart.consts";
import { PieChartProps, /*DoughnutProps*/ } from "./PieChart.interfaces";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ pieData, state }: PieChartProps) {
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
        beforeDatasetsDraw: (chart: any) => {
            const { ctx, data } = chart;

            ctx.save();
            ctx.fillStyle = "white";
            ctx.font = "bolder 16px Inter";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
                data.datasets[0].data.reduce((sum: number, item: number) => sum + item, 0),
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
                                options={options1 as any}
                                plugins={[textCenter]}
                            />
                        );
                    case 2:
                        return (
                            <Doughnut
                                data={userPieData}
                                options={options2 as any}
                                plugins={[textCenter]}
                            />
                        );
                    case 3:
                        return (
                            <Doughnut
                                data={userPieData}
                                options={options3 as any}
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