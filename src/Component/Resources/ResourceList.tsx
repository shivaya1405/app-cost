import { useEffect, useState } from "react";
import Resources from "./Resources";

const ResourceList = () => {
	const [resourcesList, setresourcesList] = useState([]);
	const [resourcesName, setResourcesName] = useState<string>("");
	const getResourceList = async () => {
		const data = await fetch(
			"https://engineering-task.elancoapps.com/api/resources"
		);
		const response = await data.json();
		setresourcesList(response);
	};
	const renderResources = (data: string) => {
		console.log(data);
		return <Resources selectedResource={data} />;
	};
	useEffect(() => {
		getResourceList();
	}, []);
	return (
		<div>
			<ul>
				{resourcesList.map((item: any, index) => (
					<li key={index} onClick={() => setResourcesName(item)}>
						{item}
					</li>
				))}
				<Resources selectedResource={resourcesName} />
			</ul>
		</div>
	);
};
export default ResourceList;
