export interface ProductResponse {
  id: Number;
  details: {
    title: string;
    price: number;
    regularPrice: number;
    productUrl: string;
    imageUrl: string;
  }
  categories: {
    id: number;
    name: string;
  }
  shop: {
    id: number;
    name: string;
  }
  type: {
    id: number;
    name: string;
  }
  lastUpdate: Date;
  hash: number;
}
