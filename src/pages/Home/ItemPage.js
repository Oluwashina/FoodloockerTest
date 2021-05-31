import React, {useState} from 'react';
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import Default from "../../assets/default.png";
// import item3 from '../../assets/item3.png'
// import item4 from '../../assets/item4.png'
// import item5 from '../../assets/item4_big.png'
import {connect} from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import { Increment, Decrement, addToCart } from '../../store/actions/carts';
import './ItemPage.css'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {useHistory} from 'react-router-dom'

const ItemPage = (props) => {

    const baseUrl = "https://www.foodlocker.com.ng"

    const history = useHistory()

    const {Increment, Decrement, count, product, id, addCartClick, auth} = props

    const [price, setPrice] = useState(product ? product.quantities[0].price : 0);

    const [initialTab, setTab] = useState(0);

    const onChangeRadio = (val, index) =>{
        setTab(index)
        setPrice(val)
    }

    const add = () =>{
        console.log(price)
        if(auth){
            var res = {
                issubmit: 1,
                action: "save_to_cart",
                quantities: count,
                sku_index: initialTab,
                products: id
            }
            addCartClick(res)
        }
        else{
            history.push('/cart')  
        }      
    }

    const BuyNow = () =>{
        history.push('/checkout')
    }

    // mapping quantities from products
    const priceLayout = product.quantities.length ? (
        product.quantities.map((value, index) => {
          return (  
            <div key={index} className="custom-control custom-radio mt-2">
                <input type="radio" id={`custom${index}`}
                value={value.price}
                checked={initialTab === index}
                onChange={e => onChangeRadio(e.currentTarget.value, index)}
                 name="customRadioInline" className="custom-control-input" />
                <label className="custom-control-label" for={`custom${index}`} style={{color: '#5B9223', fontWeight: 'bold', fontSize: 20}}>&#8358; {value.price} per {value.name}</label>
             </div>
          );
        })
      ) : (
        <div className="">
        </div>
      );
    

    return ( 
        <>
        <Navbar />
         {/* breadcrumbs */}
         <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px', marginTop: '75px'}}> 
                <div className="container">
                     <p className="mb-0" style={{fontSize: 14}}><span style={{color: '#7BC30A'}}>Home/{product.category_name}</span>/{product.name}</p>
                </div>
        </div>

        {/* details page */}
            
        <div className="container">
                

                <div className="mt-4">
                 <h5>{product.name}</h5>
                </div>

                <div className="mt-4">
                    <hr className="mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.2)'}} />
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4">

                        {/* product image */}
                        <div className="mt-4">
                        <ImageZoom
                                 image={{
                                 src: baseUrl + `${product.display_image}`,
                                 alt: 'oyap',
                                 className: 'img-fluid itemImage',
                                 
                                 }}  
                                 zoomImage={{
                                 src: baseUrl + `${product.display_image}`,
                                 alt: 'agriculture'
                                 }}
                            />
                       
                        </div>

                        {/* smaller images */}
                        <div className="mt-4" style={{display:  'flex', justifyContent: 'space-between'}}>

                            <div>
                              
                                 <ImageZoom
                                 image={{
                                 src: item1,
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: item1,
                                 alt: 'agriculture'
                                 }}
                             />

                             
                         </div>

                            <div>
            
                                 <ImageZoom
                                 image={{
                                 src: item2,
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: item2,
                                 alt: 'agriculture'
                                 }}
                             />

                               
                            </div>

                            <div>
                           
                                 <ImageZoom
                                 image={{
                                 src: Default,
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: Default,
                                 alt: 'agriculture'
                                 }}
                             />
                                 
                            </div>

                            <div>
                                 <ImageZoom
                                 image={{
                                 src: Default,
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: Default,
                                 alt: 'agriculture'
                                 }}
                             />

                                 
                           
                            </div>
                        </div>

                    </div>

                        {/* item desc */}
                    <div className="col-lg-5">
                                
                                {/* amount */}
                        <div className="mt-4">
                        {priceLayout}
                        </div>
                    

                        {/* status */}
                        <div className="mt-3">
                            <h6>Status: <span style={{color: '#5B9223', fontWeight: 'bold'}}>
                                In Stock
                                </span></h6>
                        </div>

                        <div>
                            <hr />
                        </div>

                        {/* description */}
                        <div className="mt-4">   
                            <h6 style={{fontWeight: 600}}>Description</h6>
                            <p className="mt-2">{product.description}</p>
                        </div>

                    {/* quantity add */}
                        <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Quantity</h6>
                            <div className="quantity-div mt-3">
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

                        {/* items display when added to cart */}
                        {/* <div className="mt-3">
                            <p className="mb-0">( {count} item(s) added)</p>
                        </div> */}

                        {/* add to cart and buy buttons */}
                        <div className="mt-2" style={{display: 'flex',}}>
                            <div style={{flex: 1}}>
                            <button className="btn btn-add btn-block mt-4"
                                onClick={add}
                            >Add to Cart</button>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                        <button
                        onClick={BuyNow}
                         className="btn btn-buy btn-block mt-4">Buy Now</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div>
                <Footer />
            </div>

        </>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const products = state.product.products
    const product = products.find(product => product.id === id);
    return{
        product: product,
        products: state.product.products,
        count: state.cart.count,
        id: id,
        auth: state.auth.isAuthenticated
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        Increment : () => dispatch(Increment()),
        Decrement : () => dispatch(Decrement()),
        addCartClick: (val) => dispatch(addToCart(val)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);