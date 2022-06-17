export const FETCH_PRODUCTSLIST_REQUEST = 'FETCH_PRODUCTSLIST_REQUEST';
export const FETCH_PRODUCTSLIST_SUCCESS = 'FETCH_PRODUCTSLIST_SUCCESS';
export const FETCH_PRODUCTSLIST_FAILURE = 'FETCH_PRODUCTSLIST_FAILURE';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SHOW_CART = 'SHOW_CART';

export type FetchProductsListRequestAction = ReturnType<typeof fetchProductsListRequestAction>;
export const fetchProductsListRequestAction = () => ({
  type: FETCH_PRODUCTSLIST_REQUEST as typeof FETCH_PRODUCTSLIST_REQUEST
});

export type FetchProductsListSuccessAction = ReturnType<typeof fetchProductsListSuccessAction>;
export const fetchProductsListSuccessAction = () => ({
  type: FETCH_PRODUCTSLIST_SUCCESS as typeof FETCH_PRODUCTSLIST_SUCCESS,
  data: Array
});

export type FetchProductsListFailureAction = ReturnType<typeof fetchProductsListFailureAction>;
export const fetchProductsListFailureAction = () => ({
  type: FETCH_PRODUCTSLIST_FAILURE as typeof FETCH_PRODUCTSLIST_FAILURE,
  error: Object
});

export type IncrementCounterAction = ReturnType<typeof incrementCounterAction>;
export const incrementCounterAction = (
  _id : number,
  _name : string,
  _customerPrice : number,
  _cost : number
  ) => ({
  type: INCREMENT_COUNTER as typeof INCREMENT_COUNTER,
  id : _id,
  name : _name,
  customerPrice : _customerPrice,
  cost : _cost
});

export type DecrementCounterAction = ReturnType<typeof decrementCounterAction>;
export const decrementCounterAction = (
  _id : number,
  _name : string,
  _customerPrice : number,
  _cost : number
  ) => ({
  type: DECREMENT_COUNTER as typeof DECREMENT_COUNTER,
  id : _id,
  name : _name,
  customerPrice : _customerPrice,
  cost : _cost
});

export type ShowCartAction = ReturnType<typeof showCartAction>;
export const showCartAction = (
  _option : boolean,
  ) => ({
  type: SHOW_CART as typeof SHOW_CART,
  option : _option
});

export type ProductsListAction =
  | FetchProductsListRequestAction
  | FetchProductsListSuccessAction
  | FetchProductsListFailureAction
  | IncrementCounterAction
  | DecrementCounterAction
  | ShowCartAction;
