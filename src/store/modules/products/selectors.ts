import {ProductsListDomain} from './model';
import {createSelector} from 'reselect';


export const productsDomain = (state: any): ProductsListDomain => state.product;

export const productsSelector = createSelector(
    productsDomain,
    (domain: ProductsListDomain): ProductsListDomain['elements'] => domain.elements
);

export const productsLoadingSelector = createSelector(
    productsDomain,
    (domain: ProductsListDomain): ProductsListDomain['loading'] => domain.loading
);

export const cartSelector = createSelector(
    productsDomain,
    (domain: ProductsListDomain): ProductsListDomain['cart'] => domain.cart
);

export const cartCounterSelector = createSelector(
    productsDomain,
    (domain: ProductsListDomain): ProductsListDomain['cartCounter'] => domain.cartCounter
);

export const showCartSelector = createSelector(
    productsDomain,
    (domain: ProductsListDomain): ProductsListDomain['showCart'] => domain.showCart
);
