import React, {useCallback} from 'react';
import { Modal } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {showCartSelector} from '../../store/modules/products/selectors';
import {cartSelector} from '../../store/modules/products/selectors';
import {showCartAction} from '../../store/modules/products/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ShowCartStyles} from './ShowCartStyles';

const CartModal = () => {

    const dispatch = useDispatch();
    const showCart = useSelector(showCartSelector);
    //const [showCart, setShowCart] = useState(false);
    const cartList = useSelector(cartSelector);


    const show = useCallback((_option) => {
        console.log(`show click: ${_option}`);
        dispatch(showCartAction(_option));
    }, [dispatch]);

    const cartListDOM = cartList.map( e => (
      <div className="cart-element" key={`cart-element-${e.id}`}>
            <div className="cart-element-name cart-element-field">{e.name}</div>
            <div className="cart-element-customerPrice cart-element-field">{e.customerPrice}</div>
            <div className="cart-element-qty cart-element-field">{e.qty}</div>
        </div>
    ) ); 

    console.log(`showCart -> ${showCart}`);
   
  
    return (
      
        <Modal show={showCart} onHide={() => show(false)} >
          <Modal.Header closeButton>
            <Modal.Title>These are your cart contents</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ShowCartStyles>
              <div className="cart-list">
                {cartListDOM}
              </div>
            </ShowCartStyles>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => show(false)} disabled={false}>Good, thanks!</Button>
          </Modal.Footer>
        </Modal>
      
      
    )

  };
  
  export default CartModal;