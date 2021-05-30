import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {Link} from 'react-router-dom'

const CheckoutPage = () => {
    return (  
        <>
        <Navbar />
        {/* breadcrumbs */}
        <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px', marginTop: '75px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A', fontSize: 14}}>Home/</span>Checkout</p>
                </div>
        </div>

         {/* cart history */}
         <div className="container mb-5">
                <div className="text-center mt-lg-4 mt-4">
                <h5 style={{fontWeight: 'bold'}}>CHECKOUT</h5>                
                </div>
       

        
        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-7 mb-lg-5 mb-4">
            <div>
              <h6 style={{ fontWeight: "bold" }}>Billing Details</h6>
            </div>

            {/* billing form details */}
            <div
            className="mt-lg-4 mt-4"
            style={{
              background: " rgba(196, 196, 196, 0.2)",
              borderRadius: "5px",
              padding: "30px 15px",
            }}
          >

        <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    Address Details
                  </p>
                </div>
                <div>
                  <Link to="/customer/account" className="mb-0" style={{ fontWeight: 600, color:'#ED881C', cursor: 'pointer', textDecoration: 'none' }}>
                    CHANGE
                  </Link>
                </div>
          </div>

          
        <div>
          <hr
            className="mt-4 mb-0"
            style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
          />
        </div>

        <div className="mt-3">
          {/* name */}
          <p
              className="mb-0"
              style={{lineHeight: '23px', fontWeight: 600}}
              >
                Oluwashina Ojo
              </p>

          {/* address */}
          <p
            className="mb-0 mt-1"
            style={{lineHeight: '23px'}}
            >
              65, Adebiyi street Joyce-B Road Mobil bus stop Ring road Ibadan, Ibadan Oyo
            </p>
            {/* phone */}
            <p
            className="mb-0 mt-1"
            style={{lineHeight: '23px'}}
            >
              08144964388
            </p>
        </div>

        </div>
           
          </div>

   <div className="col-lg-5 mb-5">
            <h6 style={{ fontWeight: "bold" }}>Your Order</h6>

            <div
        className="mt-lg-4 mt-4"
        style={{
          background: " rgba(196, 196, 196, 0.2)",
          borderRadius: "5px",
          padding: "30px 15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="mb-0" style={{ fontWeight: 600 }}>
              Product
            </p>
          </div>
          <div>
            <p className="mb-0" style={{ fontWeight: 600 }}>
              Sub Total
            </p>
          </div>
        </div>

        <div>
          <hr
            className="mt-4 mb-0"
            style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
          />
        </div>

        {/* cart items */}
        <div>
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <p
                  className="mb-0"
                  style={{ fontSize: 14, width: "70%", lineHeight: "21px" }}
                >
                 Corn
                </p>
              </div>
              <div>
                <p className="mb-0" style={{ fontWeight: 600 }}>
                  NGN 100
                </p>
              </div>
            </div>

            <div>
              <hr
                className="mt-4 mb-0"
                style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
              />
            </div>
        </div>   
         

    {/* shipping amount section */}
        <div
          className="mt-4"
          style={{ display: 'flex',
          justifyContent:"space-between"
        }} 
        >
          <div>
            <p
              className="mb-0"
              style={{ fontSize: 14, width: "50%", lineHeight: "21px" }}
            >
              Shipping Paid
            </p>
          </div>
          <div>
            <p className="mb-0" style={{ fontWeight: 600 }}>
              NGN 500
            </p>
          </div>
        </div>

        <div>
          <hr
            className="mt-4 mb-0"
            style={{ borderTop: '1px solid rgba(196, 196, 196, 0.5)',
          }}
          
          />
        </div>

        <div
        className="mt-4"
          style={{ display:'flex',
          justifyContent:  "space-between"
        } } 
        > 
          <div>
            <p className="mb-0" style={{ fontWeight: 700 }}>
              TOTAL
            </p>
          </div>
          <div>
            <h6 className="mb-0" style={{ fontWeight: 600, color: "#5B9223" }}>
              NGN 600
            </h6>
          </div>
        </div>
      </div>

      <div className='mt-4'>

      <button
        className="btn btn-place btn-block mt-4">
            Place Order
        </button>

      </div>

           
          </div>
        </div>

        </div>




        <div style={{marginTop: '300px'}}>
                <Footer />
        </div>

        </>
    );
}
 
export default CheckoutPage;