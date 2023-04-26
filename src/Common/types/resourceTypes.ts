import { Interface } from "readline";

export type HighchartMapper = {
	name: string;
	y: number;
};

export type MappedData = {
	items: any;
	totalCost: number;
};

export interface Resource {
	selectedResource: string;
}
export interface Items {}
