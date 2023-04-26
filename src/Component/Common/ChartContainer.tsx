import { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { highChartCategoryMapper } from "../../Common/utils/Mapper";
import HC_drilldown from "highcharts/modules/drilldown";
import { useParams } from "react-router-dom";
import { GET_URL } from "../../Common/Constants";
import { parentSeries } from "../../Common/types/Chart";
import { Resource } from "../../Common/types/ResponseTypes";
HC_drilldown(Highcharts);

const ChartContainer: React.FC<Resource> = ({ selectedResource }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { tabName } = useParams();
  const [resourcesMappedData, setResourcesMappedData] = useState<
    parentSeries[]
  >([]);

  const [resourcesDrilldownMappedData, setResourcesDrilldownMappedData] =
    useState<any[]>([]);
  let options = {
    chart: {},
    title: {
      text: "Cost Details",
    },
    xAxis: {
      type: "category",
      labels: {
        style: { fontSize: "14px" },
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: "Cost",
        style: {
          fontSize: "18px",
        },
      },
    },
    legend: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          style: { fontSize: "14px" },
          enabled: true,
          format: "{point.y:.1f}",
        },
      },
    },

    series: [
      {
        name: selectedResource,
        type: "column",
        data: resourcesMappedData,
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
      series: resourcesDrilldownMappedData,
    },
  } as Highcharts.Options;

  const getResourceCost = async () => {
    if (selectedResource) {
      const data = await fetch(`${GET_URL}${tabName}/${selectedResource}`);
      const response = await data.json();
      if (response) {
        const { seriesData, drillDownData } = highChartCategoryMapper(response);
        setResourcesMappedData(seriesData);
        setResourcesDrilldownMappedData(drillDownData);
      }
    }
  };

  const renderChart = () => (
    <HighchartsReact
      ref={chartComponentRef}
      highcharts={Highcharts}
      options={options}
    />
  );

  useEffect(() => {
    getResourceCost();
  }, [selectedResource]);

  return <div className="w-[85%]">{renderChart()}</div>;
};

export default ChartContainer;
