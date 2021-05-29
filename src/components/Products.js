
import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import './Products.css'
import Image, { Shimmer } from 'react-shimmer'



const Products = (props) => {

    const {products} = props

    const history = useHistory()
    
    const handleRoute = (val) =>{
        history.push("/item/" + val);
        window.scrollTo(0, 0);
    }

    const AllProducts = !products ?
    (
        <div className="">
        </div>
    )
     : products.map(product =>{
            return(
                <div key={product.id} className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(product.id)}>
                {/* image */}
                <div className="text-center">
                    <Image
                     src={product.image} alt="oyap"
                       NativeImgProps={{className: "productImage"}}
                        fallback={<Shimmer width={140} height={150} />}
                     />
                </div>
                {/* name */}
                <div className="mt-3">
                    <p className="mb-0 text-center">{product.name }</p>
                </div>
                {/* price */}
                <div className="mt-2">
                    <p className="mb-0 price text-center">{product.first_inventory_size}:  &#8358; {product.first_inventory_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            </div> 
            )
        }) 


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
                {AllProducts}
                </div>
            </div>

        </>
    );
}
 
export default Products;