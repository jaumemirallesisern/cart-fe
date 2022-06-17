import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {counterLoadingSelector} from '../../store/modules/counter/selectors';
import {productsSelector, cartCounterSelector} from '../../store/modules/products/selectors';
import {fetchProductsListRequestAction,decrementCounterAction, incrementCounterAction,showCartAction} from '../../store/modules/products/actions';
import {ProductListStyles} from './ProductsListStyles';
import ShowCartModal from '../ShowCartModal/ShowCartModal';

export const Counter: React.FC = () => {

    const dispatch = useDispatch();
    const elementsList = useSelector(productsSelector);
    const cartCounter = useSelector(cartCounterSelector);
    const isLoading = useSelector(counterLoadingSelector);
    
    /*const handleLoadClick = useCallback(() => {
        console.log(`loaded`);
        fetchProductsList();
    }, [dispatch]);*/

    const handleIncrementClick = useCallback((_id,_name,_customerPrice,_cost) => {
        dispatch(incrementCounterAction(_id,_name,_customerPrice,_cost));
    }, [dispatch]);

    const handleDecrementClick = useCallback((_id,_name,_customerPrice,_cost) => {
        dispatch(decrementCounterAction(_id,_name,_customerPrice,_cost));
    }, [dispatch]);

    // Will trigger cart modal
    const handleCartClick = useCallback(() => {
        dispatch(showCartAction(true));
    }, [dispatch]);

    const handleLoadClick = useCallback(() => {
        console.log(`loaded1`);
        dispatch(fetchProductsListRequestAction());
    }, [dispatch]);

    useEffect( () => {    
    });

    const productsSelectorsDOM = elementsList.map( e => {
        const price = e.customerPrice/100;
        return(
                <div className="product" key={`product-${e.id}`}>
                    <div className="product-name product-field">{e.name}</div>
                    <div className="product-customerPrice product-field">{`${price.toFixed(2)}$`}</div>
                    <div className="product-controls product-field">
                        <div className="buttons">
                            <Button onClick={() => handleIncrementClick(e.id,e.name,e.customerPrice,e.cost) } disabled={isLoading}>+</Button>
                            <Button onClick={() => handleDecrementClick(e.id,e.name,e.customerPrice,e.cost)} disabled={isLoading}>-</Button>
                        </div>
                    </div>
                </div>
            )
        } );

    return (
        <ProductListStyles>
            <div className="productsContainer">
                <ShowCartModal />
                <h1>Catalog</h1>
                <div className="loadContainer">
                    <Button onClick={handleLoadClick} disabled={isLoading}>Load products</Button>
                </div>
                <div className="cartViewContainer">
                    <Button onClick={handleCartClick} disabled={isLoading}>Cart ({cartCounter})</Button>
                </div>
                <div className="productsListContainer">
                    <div className="productsListWrapper">
                        {productsSelectorsDOM}
                    </div>
                </div>                
            </div>
        </ProductListStyles>
    )
};

export default Counter;
