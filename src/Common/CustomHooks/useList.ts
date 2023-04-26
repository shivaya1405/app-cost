import { useEffect, useState } from "react";
import { GET_URL } from "../Constants";

const useList = (type?: string) => {
  const [list, setList] = useState([]);

  const getMenuList = async () => {
    try {
      const data = await fetch(`${GET_URL}${type}`);
      const response = await data.json();
      setList(response);
    } catch (error) {
      throw new Error(`Oh no!,Error Occured" ${error}`);
    }
  };

  useEffect(() => {
    getMenuList();
  }, [type]);
  return list;
};
export default useList;
