import { PieChartState } from "./PieChart.enums";

export interface PieChartProps {
    pieData: PieDataItem[],
    state: PieChartState
}

export interface PieDataItem {
    name: string,
    count: number,
    color: string,
}