import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { highChartCategoryMapper } from "../../Common/utils/Mapper";
import {
	HighchartMapper,
	MappedData,
	Resource,
} from "../../Common/types/resourceTypes";

const Resources: React.FC<Resource> = ({ selectedResource }) => {
	console.log({ selectedResource });
	const [resourcesMappedData, setResourcesMappedData] = useState<
		HighchartMapper[]
	>([]);

	const getResourceCost: any = async () => {
		const data = await fetch(
			"https://engineering-task.elancoapps.com/api/resources/" +
				selectedResource
		);
		const response = await data.json();
		const mappedData = highChartCategoryMapper(response);
		setResourcesMappedData(mappedData);
	};

	useEffect(() => {
		getResourceCost();
	}, [selectedResource]);

	const options: Highcharts.Options = {
		chart: {
			// height: "500px"
		},
		title: {
			text: "",
		},
		xAxis: {
			type: "category",
			labels: {
				style: { fontSize: "26px" },
				enabled: true,
			},
		},
		colors: ["#009933", "black", "red"],
		legend: {
			enabled: true,
		},
		credits: {
			enabled: false,
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				groupPadding: 0.02,
				zones: [
					{
						value: 10, // Values up to 10 (not including) ...
						color: "#00BFB3", // ... have the color blue.
					},
					{
						color: "#6730E3", // Values from 10 (including) and up have the color red
					},
				],
				// dataLabels: {
				//   enabled: false,
				//   color: "black",
				//   align: "right",
				//   // format: "{x} {y} d",
				//   inside: false,
				//   useHTML: true,
				//   formatter: function () {
				//     if (this.y > 10) {
				//       return (
				//         '<span style="color: white">' +
				//         this.x +
				//         "<br/>" +
				//         this.y +
				//         "%</span>"
				//       );
				//     } else {
				//       return (
				//         '<span style="color: black">' +
				//         this.x +
				//         "<br/>" +
				//         this.y +
				//         "%</span>"
				//       );
				//     }
				//   },
				//   style: {
				//     fontWeight: "bold"
				//   },
				//   verticalAlign: "middle"
				// }
			},
			series: {
				borderWidth: 0,
				dataLabels: {
					style: { fontSize: "25px" },
					enabled: true,
					format: "{point.y:.1f}",
				},
			},
		},

		series: [
			{
				name: selectedResource,
				//data: [resourcesMappedData.totalCost],
				type: "column",
				data: resourcesMappedData,
				//colorByPoint: true
			},
		],
	};

	return (
		<div className="barChart">
			<HighchartsReact highcharts={Highcharts} options={options} />
			<h4 style={{ textAlign: "center", marginTop: "30px" }}>
				{" "}
				Your Proposed Portfolio Holdings{" "}
			</h4>
		</div>
	);
};

export default Resources;
