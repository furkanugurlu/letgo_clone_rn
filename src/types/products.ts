export type Prodcuts = {
  id: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  rating: number;
  numReviews?: string;
  isFeatured: boolean;
  name: string;
  description?: string;
  category: number;
  countInStock: number;
};
