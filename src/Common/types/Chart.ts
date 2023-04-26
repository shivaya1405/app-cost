export type parentSeries = {
  readonly name: string;
  readonly y: number;
  readonly drilldown: string;
};
export type drillDownSeries = {
  readonly name: string;
  readonly id: string;
  readonly type: string;
  readonly data: string[];
};
export interface HighChartMapper {
  seriesData: parentSeries[];
  drillDownData: drillDownSeries[];
}
