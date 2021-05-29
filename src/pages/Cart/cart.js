import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Cart = () => {
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
              </div>



              <div style={{marginTop: '300px'}}>
                <Footer />
            </div>

        </>
     );
}
 
export default Cart;