import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex  border border-gray-200 bg-purple-200 h-20 mb-2 rounded-lg shadow-md">
      <Link to="/">
        <img
          className="h-20"
          src="https://e7.pngegg.com/pngimages/752/901/png-clipart-computer-icons-financial-transaction-transaction-cost-analysis-trademark-investment.png"
          alt="Costing Logo"
        ></img>
      </Link>
      <ul className="flex gap-6 m-auto items-center pr-2 font-bold">
        <Link to="/tab/Resources">
          <li className="hover:bg-purple-400 p-2 rounded-md shadow-lg">
            Resources
          </li>
        </Link>
        <Link to="/tab/Applications">
          <li className="hover:bg-purple-400 p-2 rounded-md shadow-lg">
            Applications
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
