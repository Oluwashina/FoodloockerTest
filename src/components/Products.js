
import React from 'react';
import {Link} from 'react-router-dom'
import './Products.css'
import Image, { Shimmer } from 'react-shimmer'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item4_big.png'

const Products = () => {

    const handleRoute = (val) =>{
        alert(val)
    }

    return (  
        <>
        
        {/* Products heading */}
        <div className="container mb-5" style={{background: 'rgba(196, 196, 196, 0.2)', padding: '10px 20px'}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 2}}>   
                        <p className="mb-0" style={{fontWeight: 600}}>Recently Added</p>
                    </div>
                    <div style={{flex: 1}}>
                        <ul className="mb-0" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'flex-end',}}>
                            <li className="d-none d-lg-block"><Link to="/"  style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Fruits</Link></li>
                            <li className="d-none d-lg-block"><Link to="/" style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Vegetables</Link></li>
                            <li className="d-none d-lg-block"><Link to="/" style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Meat</Link></li>
                            <li className="d-sm-block d-md-block"><Link to="/" style={{color: '#5B9223', textDecoration: 'none'}}>View All</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* end of products heading */}

             {/* products layout section */}
             <div className="container mt-lg-4 mt-3">

                {/* mapping products */}
                <div className="row">

                {/* 1st product */}
                     <div  className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
                        {/* image */}
                        <div className="text-center">
                            <Image
                                src={item1} alt="oyap"
                                NativeImgProps={{className: "productImage"}}
                                fallback={<Shimmer width={140} height={150} />}
                                />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Corn</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div> 

                {/* 2nd */}
                <div  className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
                        {/* image */}
                        <div className="text-center">
                            <Image
                                src={item2} alt="oyap"
                                NativeImgProps={{className: "productImage"}}
                                fallback={<Shimmer width={140} height={150} />}
                                />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Corn</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div> 

                {/* 3rd */}
                <div  className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
                        {/* image */}
                        <div className="text-center">
                            <Image
                                src={item3} alt="oyap"
                                NativeImgProps={{className: "productImage"}}
                                fallback={<Shimmer width={140} height={150} />}
                                />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Corn</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div> 

                    {/* 4th */}
                    <div  className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
                        {/* image */}
                        <div className="text-center">
                            <Image
                                src={item4} alt="oyap"
                                NativeImgProps={{className: "productImage"}}
                                fallback={<Shimmer width={140} height={150} />}
                                />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Corn</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div> 

                    {/* 5th */}
                    <div  className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
                        {/* image */}
                        <div className="text-center">
                            <Image
                                src={item5} alt="oyap"
                                NativeImgProps={{className: "productImage"}}
                                fallback={<Shimmer width={140} height={150} />}
                                />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Corn</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div> 





                </div>
            </div>

        </>
    );
}
 
export default Products;