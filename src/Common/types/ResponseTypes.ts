export interface Resource {
  selectedResource: string;
}
export interface ApiResponse {
  ConsumedQuantity: string;
  Cost: number;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: Tags;
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}
export type MappedData = {
  items: any;
  totalCost: number;
};
export interface Tags {
  "app-name": string;
  environment: string;
  "business-unit": string;
}
