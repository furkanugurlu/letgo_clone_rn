export type Prodcuts = {
  id: number;
  image: string;
  images: string[];
  brand: string;
  price: number;
  rating: number;
  numReviews?: number;
  isFeatured: boolean;
  name: string;
  description?: string;
  category: number;
  countInStock: number;
};

export type Category = {
  id: string;
  name: string;
  src: string;
};
