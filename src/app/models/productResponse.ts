export interface ProductResponse {
  id: Number;
  details: {
    title: string;
    price: Number;
    regularPrice: Number;
    productUrl: string;
    imageUrl: string;
  }
  categories: {
    id: Number;
    name: string;
  }
  shop: {
    id: Number;
    name: string;
  }
  type: {
    id: Number;
    name: string;
  }
  lastUpdate: Date;
  hash: Number;
}
