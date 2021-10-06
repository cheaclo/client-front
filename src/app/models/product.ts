export interface Product {
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

// {
//   "id": 43871,
//   "details": {
//     "title": "Multipack of 3 - baby triangular scarf",
//     "price": 6.99,
//     "regularPrice": 4.99,
//     "productUrl": "https://www.c-and-a.com/eu/en/shop/baby-bibs-2151278/1?categoryId=16107",
//     "imageUrl": "https://www.c-and-a.com/productimages/b_rgb:ECECEC,c_scale,h_430,q_auto:eco,e_sharpen:70/v1622706158/2151278-1-08.jpg"
//   },
//   "categories": [
//     {
//       "id": 2,
//       "name": "Babies"
//     }
//   ],
//   "shop": {
//     "id": 2,
//     "name": "CA"
//   },
//   "type": {
//     "id": 3,
//     "name": "Kid"
//   },
//   "lastUpdate": "2021-10-06T20:16:47.098+00:00",
//   "hash": -429433717
// }
