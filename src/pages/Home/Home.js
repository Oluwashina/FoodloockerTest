import React, {useEffect} from 'react';
import './Home.css'
import StartUp from "../../assets/startup.svg";
import Secure from "../../assets/secure.svg";
import Support from "../../assets/support.svg";
import Products from '../../components/Products';
import app from '../../assets/app.webp'
import googleplay from '../../assets/googleplay.webp'
import Footer from '../../components/Footer';
import {connect} from 'react-redux'
import { getProducts } from '../../store/actions/products';
import Navbar from '../../components/Navbar';

const Home = (props) => {

    const {ProductsFetch, products} = props

    // make call to fetch products on load of page
  useEffect(() => {
    ProductsFetch();
  }, [ProductsFetch]);


    return ( 
        <>
        <Navbar />
         <div className="home">
            <div className="container">
            
            </div>
        </div>

        {/* services */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="services-1">
              <div>
                <img src={StartUp} alt="start" className="img-fluid" />
              </div>
              <div className="ml-4">
                <h5 style={{ fontWeight: 600 }}>Fast Delivery</h5>
                <p>Timely delivery on all orders</p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="col-lg-4">
            <div className="services-2 mt-lg-0 mt-5">
              <div>
                <img src={Secure} alt="start" className="img-fluid" />
              </div>
              <div className="ml-4">
                <h5 style={{ fontWeight: 600 }}>Secure Payment</h5>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="col-lg-4">
            <div className="services-3 mt-lg-0 mt-5">
              <div>
                <img src={Support} alt="start" className="img-fluid" />
              </div>
              <div className="ml-4">
                <h5 style={{ fontWeight: 600 }}>Quality Support</h5>
                <p>Realtime Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products products={products} />

      {/* mobile div */}
      <div className="mt-5 mobile-div-container mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="mobile-div">
                            <img className="lazyload d-block m-auto loading img-fluid" src={app} alt="app" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 mt-5">
                            <div className="mobile-div-text">
                                <h3>Experience our mobile app</h3>
                                <p>Shopping made easy, faster and convenient with FoodlockerApp</p>
                                <br/>
                                <a href="https://play.google.com/store/apps/details?id=com.ng.foodlocker.foodlocker">
                                    <img src={googleplay} className='mt-4' style={{width: '35%'}} alt="app" />
                                </a>
                            </div>
                    </div>
                </div>
            </div>
      </div>

      <Footer />


        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        products: state.product.products
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ProductsFetch: () => dispatch(getProducts()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);