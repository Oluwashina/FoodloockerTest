import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {Link} from 'react-router-dom'
import './cart.css'
import {connect} from 'react-redux'
import item1 from '../../assets/item1.png'
import { Decrement, getCart, Increment } from '../../store/actions/carts';

const Cart = (props) => {

  const {count, Increment, Decrement, auth, getCartItems} = props

    // make call to fetch cart items
    useEffect(() => {
        if(auth){
            getCartItems();
         }
    }, [getCartItems, auth]);

    return ( 
        <>
        <Navbar/>
             {/* breadcrumbs */}
             <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px', marginTop: '75px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A', fontSize: 14}}>Home/</span>Cart</p>
                </div>
             </div>

              {/* cart history */}
              <div className="container mb-5">
                <div className="text-center mt-lg-4 mt-4">
                <h5 style={{fontWeight: 'bold'}}>CART</h5>                
                </div>

                
            {/* cart title */}
            <div 
                className="mt-5 cart-title"
                >   
                    <div style={{flex: 3}}>
                        <h6 style={{fontWeight: 700}}>Item</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Quantity</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Unit Price</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Sub Total</h6>
                    </div>
                </div>


          {/* cart heading */}

            {/* cart items layout */}
            <div className="mt-lg-3 mt-4 cart-div">
            <div style={{flex: 3}}>
                <div style={{display: 'flex'}}>
                    <div>
                        <img src={item1} alt="cart" className="cartImage" />
                    </div>
                    <div className="ml-4">
                        <p className="mb-0 mt-3" style={{width: '80%', lineHeight: '25px'}}>Corn</p>
                        <p className="mb-0 mt-2" style={{color: '#C4C4C4', fontSize: 14}}>Description</p>
                        <div className="mt-3">
                            <p className="mb-0" 
                            style={{color: '#ED881C', cursor: 'pointer'}}>REMOVE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{flex: 1}}>
                <div className="quantitycart-div mt-3 mt-lg-0">
                        <div>
                            <i 
                            className={count === 1 ? "mdi mdi-minus disabled" : "mdi mdi-minus"}
                            onClick={Decrement} 
                            ></i>
                        </div>
                        <div style={{fontSize: 20}}>
                           {count}
                        </div>
                        <div>
                         <i className="mdi mdi-plus"
                              onClick={Increment} 
                            style={{fontSize: 20, cursor: 'pointer'}}></i>
                            </div>
                        </div>
                </div>
                <div style={{flex: 1,}}>
                    <h6 className="mt-4 mt-lg-0 mb-4 mb-lg-0" style={{fontWeight: 700}}>NGN 100,000</h6>
                </div>
                <div style={{flex: 1}}>
                    <h6 className="d-none d-md-block" style={{fontWeight: 700}}>NGN 100,000</h6>
                </div>
            </div>   


                      
            {/* total layout */}
            <div 
                 className="mt-5 total-div"
                >   
                    <div>
                        
                    </div>
                    <div>
                       
                    </div>
                    <div>
                        <h5 style={{fontWeight: 700}}>TOTAL</h5>
                    </div>
                    <div>
                        <h5 style={{fontWeight: 700, color: '#5B9223'}}>NGN 100,000</h5>
                    </div>
                </div>


                <div
                className="mt-2 text-center text-lg-right"
                 >
                <Link to="/checkout" className="btn btn-checkout mt-4">Proceed to Checkout</Link>
                </div>




              </div>




              <div style={{marginTop: '300px'}}>
                <Footer />
            </div>

        </>
     );
}


const mapStateToProps = (state) =>{
  return{
    count: state.cart.count,
    auth: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    Increment : () => dispatch(Increment()),
    Decrement : () => dispatch(Decrement()),
    // CartRemove: (id) => dispatch(deleteCart(id)),
    getCartItems: () => dispatch(getCart()),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);