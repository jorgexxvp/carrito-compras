//REQUEST


//RESPONSE

export interface IRating {
  rate: number;
  count: 120;
}

export interface IProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
