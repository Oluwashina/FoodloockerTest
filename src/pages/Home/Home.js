import React from 'react';
import './Home.css'
import StartUp from "../../assets/startup.svg";
import Secure from "../../assets/secure.svg";
import Support from "../../assets/support.svg";
import Products from '../../components/Products';

const Home = () => {
    return ( 
        <>
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

      <Products />


        </>
     );
}
 
export default Home;