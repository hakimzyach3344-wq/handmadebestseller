export interface ProductVariation {
  [key: string]: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  slug: string;
  handle?: string;
  outOfStock?: boolean;
  variationTypes?: Record<string, string[]>;
  variations?: ProductVariation[];
}
