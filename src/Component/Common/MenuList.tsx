import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import useList from "../../Common/CustomHooks/useList";
import ChartContainer from "./ChartContainer";
import { useState } from "react";
const MenuList = () => {
  const [chartContainerReRender, setChartContainerReRender] =
    useState<boolean>(false);
  const [selectedListItem, setSelectedListItem] = useState<string>("");
  const { tabName } = useParams();

  const list = useList(tabName);
  const menuItemClickedHandler = (selectedResource: string) => {
    setChartContainerReRender(true);
    setSelectedListItem(selectedResource);
  };
  return (
    <div className="flex w-full">
      <ul className="border max-h-[50%] rounded-lg mb-2 border-gray-300 overflow-y-auto">
        {list.map((item: any, index) => (
          <MenuItem
            key={index}
            selectedResource={item}
            menuItemClicked={menuItemClickedHandler}
          />
        ))}
      </ul>

      {chartContainerReRender ? (
        <ChartContainer selectedResource={selectedListItem}></ChartContainer>
      ) : (
        <div className="text-3xl p-4 w-full text-center font-bold text-amber-600">
          👈 Please select menu item to see charts
        </div>
      )}
    </div>
  );
};
export default MenuList;
