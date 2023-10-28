import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../action/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);


    const [inputValues, setInputValues] = useState({
        items: [],
        total: "",

    }


    )



    const dispatch = useDispatch();

    const navigate = useNavigate();

    function generateCurrency(params) {
        return params.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleOrder = () => {
        for (let i = 0; i < cart.cartItems.length; i++) {
            inputValues.items.push({

                id: cart.cartItems[i].id,
                quantity: cart.cartItems[i].cartQuantity,
                price: cart.cartItems[i].price > 0 ? cart.cartItems[i].price : ""

            });
        }
        inputValues.total = cart.cartTotalAmount;

     
        console.log(inputValues);
        handleClearCart();
        toast.success("Đặt dịch vụ thành công", {
            position: "top-center",
          });
      
    }



    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Giỏ hàng của bạn còn trống</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Tìm kiếm và đặt dịch vụ</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Dịch vụ</h3>
                        <h3 className="price">Giá</h3>
                        <h3 className="quantity">Số lượng</h3>
                        <h3 className="total">Tổng giá:</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <div className="cart-item" key={cartItem.id}>
                                    <div className="cart-product">
                                        <img src={cartItem.image} alt={cartItem.name} />
                                        <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.desc}</p>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                Xóa dịch vụ
                                            </button>
                                        </div>
                                    </div>
                                    {!cartItem.isStandard ? (<>
                                        <div className="cart-product-price">{generateCurrency(cartItem.price)}</div>
                                        <div className="cart-product-quantity">
                                            <button onClick={() => handleDecreaseCart(cartItem)}>
                                                -
                                            </button>
                                            <div className="count">{cartItem.cartQuantity}</div>
                                            <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                        </div>
                                        <div className="cart-product-total-price display-6">
                                            {generateCurrency(cartItem.price * cartItem.cartQuantity)}
                                        </div>
                                    </>
                                    ) : ""}

                                </div>
                            ))}
                    </div>

                    <div className="cart-summary">
                        <button className="clear-btn" onClick={() => handleClearCart()}>
                            Xóa tất cả
                        </button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Tổng: </span>
                                <span className="amount">{generateCurrency(cart.cartTotalAmount)}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button onClick={handleOrder}>Đặt dịch vụ</button>
                            <div className="continue-shopping">
                                <Link onClick={() => navigate(-1)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
