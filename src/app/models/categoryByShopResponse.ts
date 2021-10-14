import { CategoryResponse } from "./categoryResponse";

export interface CategoryByShopResponse {
  type: {
    id: number;
    name: string;
  };
  categories: CategoryResponse[];
}
