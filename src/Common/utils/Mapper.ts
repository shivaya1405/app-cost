import { environmentConfig, highchartSeriesData } from "../Config";
import { MappedData } from "../types/resourceTypes";

const mapper = (data: any) => {
	const environments = { ...environmentConfig };
	data.forEach((item: any) => {
		const {
			Tags: { environment },
			ConsumedQuantity,
			Cost,
			ResourceGroup,
			UnitOfMeasure,
		} = item;

		environments[environment].items.push({
			ConsumedQuantity,
			Cost,
			ResourceGroup,
			UnitOfMeasure,
		});
		environments[environment].totalCost += +Cost;
		//return environments;
	});
	return environments;
};
export const highChartCategoryMapper = (data: any) => {
	const mappedData = mapper(data);
	const highChartdata = Object.entries(mappedData as MappedData).map(
		([key, item]) => ({
			name: key,
			y: item.totalCost,
		})
	);
	return highChartdata;
};
