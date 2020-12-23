import React from 'react'
import cart from "./../assest/themes/images/ico-cart.png"
import Card from './Card'
import panasonic from "./../assest/themes/images/products/panasonic.jpg"
import kindle from "./../assest/themes/images/products/kindle.png"
import payment_methods from "./../assest/themes/images/payment_methods.png"
import {useCountState} from "./../ContextStateProvider"

import productImg1 from "./../assest/themes/images/products/1.jpg"
import productImg2 from "./../assest/themes/images/products/2.jpg"
import productImg3 from "./../assest/themes/images/products/3.jpg"
import productImg4 from "./../assest/themes/images/products/4.jpg"
import productImg5 from "./../assest/themes/images/products/5.jpg"
import productImg6 from "./../assest/themes/images/products/6.jpg"
import productImg7 from "./../assest/themes/images/products/7.jpg"

function MainBody() {
    let [state,dispatch]=useCountState()
    const addToCart=(img,id=state.cart.length)=>{
        dispatch({type:"addCart",payload:{img,id}})
        // console.log(state)
    }

    return (
        <div>
            <div id="mainBody">
	            <div class="container">
	                <div class="row">
	                    <div id="sidebar" class="span3">
		                    <div class="well well-small"><div id="myCart" href="product_summary.html"><img src={cart} alt="cart" />{state.cart.length} Items in your cart  <span class="badge badge-warning pull-right">Rs 155.00</span></div></div>
		                    <ul id="sideManu" class="nav nav-tabs nav-stacked">
                                <li class="subMenu open"><div> ELECTRONICS [230]</div>
                                    <ul>
                                    <li><div class="active" href="products.html"><i class="icon-chevron-right"></i>Cameras (100) </div></li>
                                    <li><div href="products.html"><i class="icon-chevron-right"></i>Computers, Tablets &amp; laptop (30)</div></li>
                                    <li><div href="products.html"><i class="icon-chevron-right"></i>Mobile Phone (80)</div></li>
                                    <li><div href="products.html"><i class="icon-chevron-right"></i>Sound &amp; Vision (15)</div></li>
                                    </ul>
                                </li>
                                <li class="subMenu"><a> CLOTHES [840] </a>
                                    <ul style={{"display":"none"}}>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Women's Clothing (45)</a></li>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Women's Shoes (8)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Women's Hand Bags (5)</a></li>	
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Men's Clothings  (45)</a></li>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Men's Shoes (6)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Kids Clothing (5)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Kids Shoes (3)</a></li>												
                                    </ul>
                                </li>
                                <li class="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                                    <ul style={{"display":"none"}}>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Angoves  (35)</a></li>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Bouchard Aine &amp; Fils (8)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>French Rabbit (5)</a></li>	
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Louis Bernard  (45)</a></li>
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>BIB Wine (Bag in Box) (8)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Other Liquors &amp; Wine (5)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Garden (3)</a></li>												
                                        <li><a href="products.html"><i class="icon-chevron-right"></i>Khao Shong (11)</a></li>												
                                    </ul>
                                </li>
                                <li><a href="products.html">HEALTH &amp; BEAUTY [18]</a></li>
                                <li><a href="products.html">SPORTS &amp; LEISURE [58]</a></li>
                                <li><a href="products.html">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
		                    </ul>
		                    <br/>
                            <div class="thumbnail">
                                {/* //////////// */}
                                <img src={panasonic} alt="Bootshop panasonoc New camera" />
                                <div class="caption">
                                <h5>Panasonic</h5>
                                    <h4 style={{"text-align":"center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <div class="btn" onClick={()=>addToCart(panasonic)}>Add to <i class="icon-shopping-cart"></i></div> <a class="btn btn-primary" href="#">Rs 222.00</a></h4>
                                </div>
                            </div><br/>
                            <div class="thumbnail">
                                <img src={kindle} title="Bootshop New Kindel" alt="Bootshop Kindel"/>
                                <div class="caption">
                                <h5>Kindle</h5>
                                    <h4 style={{"text-align":"center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <div class="btn" onClick={()=>addToCart(kindle)}>Add to <i class="icon-shopping-cart"></i></div> <a class="btn btn-primary" href="#">Rs 222.00</a></h4>
                                </div>
                            </div><br/>
                            <div class="thumbnail">
                                <img src={payment_methods} title="Bootshop Payment Methods" alt="Payments Methods"/>
                                <div class="caption">
                                <h5>Payment Methods</h5>
                                </div>
                            </div>
	                    </div>
                        <div class="span9">		 
                            <h4>Latest Products </h4>
                            <ul class="thumbnails">
                                <Card img={productImg1} id="id1" />
                                <Card img={productImg2} id="id2"/>
                                <Card img={productImg3} id="id3"/>
                                <Card img={productImg4} id="id4"/>
                                <Card img={productImg5} id="id5"/>
                                <Card img={productImg6} id="id6"/>
                                <Card img={productImg7} id="id7"/>
                            </ul>	
                        </div>
		            </div>
	            </div>
            </div>
        </div>
        
    )
}

export default MainBody
