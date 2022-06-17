export interface Product {
  id: number;
  name: string;
  customerPrice: number;
  cost : number;
}

export interface ItemProduct {
  id: number;
  name: string;
  customerPrice: number;
  cost : number;
  qty : number;
}

export interface ProductsListDomain {
  elements: Array<Product>;
  cart: Array<ItemProduct>;
  cartCounter : number;
  loading: boolean;
  error: boolean;
  showCart : boolean;
}

export const initialState: ProductsListDomain = {
  elements: [],
  cart: [],
  cartCounter : 0,
  loading: false,
  error: false,
  showCart : false
};
