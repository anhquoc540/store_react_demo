import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../action/features/cart/cartSlice";
import { createOrder } from "../action/features/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button, Select, Checkbox } from "antd";

import { Link } from "react-router-dom";


const Cart = () => {
    const cart = useSelector((state) => state.cart);



    const [inputValues, setInputValues] = useState({
        items: [],
        total: 0,
        createDate: "",
        storeId: "",
        timeId: ""
    })

    const [componentDisabled, setComponentDisabled] = useState(true);

    const time = [
        {
            id: 1,
            name: 'Nhanh',
            price: 30000,

        },
        {
            id: 2,
            name: 'Sieu toc',
            price: 40000,

        }
    ]
    const data = []
    for (let i = 0; i < time.length; i++) {
        data.push({
            label: time[i].name,
            value: JSON.stringify({ id: time[i].id, price: time[i].price })

        });

    }


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
    const handleSubmitOrder = (product) => {
        dispatch(createOrder(product));
    };


    const handleTimeInput = (e) => {
        console.log(e)
        if (e !== undefined) {
            const value = JSON.parse(e);
          

            setInputValues({ ...inputValues, timeId: value.id, total:+ value.price });
        
        }
    }

    console.log(componentDisabled)

    const handleCheckbox = (e) => {
        setComponentDisabled(e.target.checked);
        if (e.target.checked){
            setInputValues({ ...inputValues, timeId: '', total:0});
        }

    }

    const handleOrder = () => {
        for (let i = 0; i < cart.cartItems.length; i++) {
            inputValues.items.push({

                id: cart.cartItems[i].id,
                quantity: cart.cartItems[i].cartQuantity,
                price: cart.cartItems[i].price > 0 ? cart.cartItems[i].price : 0,

            });
        }
        inputValues.total += cart.cartTotalAmount;
        inputValues.storeId = cart.storeId;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        const updatedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        inputValues.createDate = updatedDateTime;
        handleClearCart();
        console.log(inputValues);
        toast.success("Đặt dịch vụ thành công", {
            position: "top-center",
        });
        handleSubmitOrder(inputValues);
        console.log(inputValues);
    }



    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Giỏ hàng của bạn còn trống</p>
                    <div className="start-shopping">
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
                                <span className="amount">{generateCurrency(cart.cartTotalAmount + inputValues.total)}</span>
                            </div>
                            <Form name="complex-form" onFinish={handleOrder} >
                                <div className="subtotal py-4">
                                    <Checkbox
                                        checked={componentDisabled}
                                        // onChange={(e) => { setComponentDisabled(e.target.checked);
                                        
                                        // }}
                                        onChange={handleCheckbox}
                                    >
                                        Form disabled
                                    </Checkbox>


                                    <div>
                                        <Form disabled={componentDisabled}>

                                            <Form.Item
                                                label="Thời gian hoàn thành:"
                                                name={"timeId"}
                                                noStyle
                                                rules={[{ required: true, message: 'Vui lòng chọn giá trị !!!' }]}

                                            >
                                                <Select onChange={handleTimeInput} options={data} value={inputValues.timeId}>

                                                </Select>
                                            </Form.Item>

                                        </Form>


                                    </div>

                                </div>
                                <Form.Item label=" " colon={false}>
                                    <Button type="primary" htmlType="submit">
                                        Đặt dịch vụ
                                    </Button>
                                </Form.Item>



                            </Form>
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
