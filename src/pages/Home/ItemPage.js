import React from 'react';
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import Default from "../../assets/default.png";
// import item3 from '../../assets/item3.png'
// import item4 from '../../assets/item4.png'
// import item5 from '../../assets/item4_big.png'
import {connect} from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import { Increment, Decrement } from '../../store/actions/carts';
import './ItemPage.css'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const ItemPage = (props) => {

    const {Increment, Decrement, count} = props

    return ( 
        <>
        <Navbar />
         {/* breadcrumbs */}
         <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px', marginTop: '75px'}}> 
                <div className="container">
                     <p className="mb-0" style={{fontSize: 14}}><span style={{color: '#7BC30A'}}>Home/Vegetables</span>/Beans</p>
                </div>
        </div>

        {/* details page */}
            
        <div className="container">
                

                <div className="mt-4">
                 <h5>Beans</h5>
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
                                 src: item1,
                                 alt: 'oyap',
                                 className: 'img-fluid itemImage',
                                 
                                 }}  
                                 zoomImage={{
                                 src: item1,
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
                            <h5 style={{color: '#5B9223', fontWeight: 'bold'}}>NGN 20,000</h5>
                        </div>

                        {/* status */}
                        <div>
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
                            <p className="mt-2">Good and healthy</p>
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
                             
                            >Add to Cart</button>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                        <button
                        
                         className="btn btn-buy btn-block mt-4">Buy Now</button>
                            </div>
                        </div>

                    </div>

                    {/* seller section */}
                    <div className="col-lg-3">
                            <div className="sellersDiv mt-4 mt-lg-0">
                               
                                <div className="text-center">
                                    <h6 style={{fontWeight: 600}}>Seller Details</h6>
                                </div>

                                <div className="text-center mt-3">
                                    <img src={item1} alt="seller" className="img-fluid seller-image" />
                                </div>

                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{fontWeight: 600}}>Name1</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0" style={{fontSize: 14, fontWeight: 500}}>Reg Date: 26/12/2020</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>07060825698</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>shinzbaba@gmail.com</p>
                                </div>

                                <div className="mt-4">
                                 <a  href={`tel:07060825698`} className="btn btn-contact btn-block mt-4" style={{color: 'white'}}>Contact Me</a> 
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

const mapStateToProps = (state) =>{
    return{
        count: state.cart.count,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        Increment : () => dispatch(Increment()),
        Decrement : () => dispatch(Decrement()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);