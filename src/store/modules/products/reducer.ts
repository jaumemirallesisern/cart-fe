import {ProductsListDomain, initialState} from './model';
import * as Actions from './actions';

const productsListReducer = (state: ProductsListDomain = initialState, action: Actions.ProductsListAction) => {
  console.log(`Reducer: ${action.type}`);
  switch (action.type) {

    case Actions.FETCH_PRODUCTSLIST_REQUEST:
      console.log(`Request triggered`);
      return { ...state, loading: true, error: false };

    case Actions.FETCH_PRODUCTSLIST_SUCCESS:
      console.log(`Received data: ${action.data}`);
      return { ...state, loading: false, error: false, elements: action.data };

    case Actions.FETCH_PRODUCTSLIST_FAILURE:
      return { ...state, loading: false, error: true };

    case Actions.INCREMENT_COUNTER:
      let copyCarti = state.cart;
      console.log(copyCarti);
      const ii = copyCarti.findIndex( e => e.id === action.id);
      if(ii === -1 ){
        copyCarti.push({
          id : action.id,
          qty : 1,
          name : action.name,
          customerPrice : action.customerPrice,
          cost : action.cost
        });
      } else {
        copyCarti[ii].qty = copyCarti[ii].qty + 1;
      };
      console.log(copyCarti);
      const cartQty = copyCarti.reduce( (acc, value) => acc + value.qty , 0);
      return { ...state, loading: false, error: true, cart : copyCarti, cartCounter: cartQty };

    case Actions.DECREMENT_COUNTER:
      let copyCartd = state.cart;
      const di = copyCartd.findIndex( e => e.id === action.id);
      if(di === -1 ){
        
      } else {
        if(copyCartd[di].qty > 0){
          copyCartd[di].qty = copyCartd[di].qty - 1;
        };
      };
      const cartQtyd = copyCartd.reduce( (acc, value) => acc + value.qty , 0);
      return { ...state, loading: false, error: true, cart : copyCartd, cartCounter: cartQtyd };

    case Actions.SHOW_CART:
      console.log(`Show cart: ${action.option}`);
      return { ...state, showCart: action.option };

    default:
      return state;
  }
};

export default productsListReducer;
