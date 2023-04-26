import { environmentConfig } from "../Config";
import { ApiResponse, MappedData } from "../types/ResponseTypes";
import { HighChartMapper } from "../types/Chart";
const mapper = (data: ApiResponse[]) => {
  const environments = JSON.parse(JSON.stringify(environmentConfig));
  data.forEach((item: ApiResponse) => {
    const {
      Tags: { environment },
      ConsumedQuantity,
      Cost,
      ResourceGroup,
      UnitOfMeasure,
      Date,
    } = item;
    if (Cost > 0) {
      environments[environment].items.push({
        ConsumedQuantity,
        Cost,
        ResourceGroup,
        UnitOfMeasure,
        Date,
      });
      environments[environment].totalCost += +Cost;
    }
  });
  return environments;
};
export const highChartCategoryMapper = (data: any): HighChartMapper => {
  const mappedData = mapper(data);
  const highChartSeriesdata = Object.entries(mappedData as MappedData).map(
    ([key, item]) => ({
      name: key,
      y: item?.totalCost,
      drilldown: key,
    })
  );

  const highChartDrillDownData = Object.entries(mappedData as MappedData).map(
    ([key, item]) => ({
      type: "column",
      name: key,
      id: key,
      data: item.items.map((i: any) => [i.Date, +i.Cost]),
    })
  );
  return {
    seriesData: highChartSeriesdata,
    drillDownData: highChartDrillDownData,
  };
};
