const MenuItem: React.FC<any> = ({ selectedResource, menuItemClicked }) => {
  return (
    <div>
      <li
        onClick={() => menuItemClicked(selectedResource)}
        className="m-2 border rounded-lg border-gray-400 p-2 hover:bg-slate-200"
      >
        {selectedResource}
      </li>
    </div>
  );
};

export default MenuItem;
