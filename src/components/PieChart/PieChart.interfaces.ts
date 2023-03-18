import { PieChartState } from "./PieChart.enums";
import type { ChartData, ChartOptions } from 'chart.js';

export interface PieChartProps {
    pieData: PieDataItem[],
    state: PieChartState
}

export interface PieDataItem {
    name: string,
    count: number,
    color: string,
}

export interface DoughnutProps {
    options: ChartOptions<'doughnut'>;
    data: ChartData<'doughnut'>;
}