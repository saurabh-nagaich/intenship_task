import React from 'react'
import fb from "./../assest/themes/images/facebook.png"
import twitter from "./../assest/themes/images/twitter.png"
import youtube from "./../assest/themes/images/youtube.png"

function Footer() {
    return (
        <div>
            <div id="footerSection">
	<div class="container">
		<div class="row">
			<div class="span3">
				<h5>ACCOUNT</h5>
				<a href="login.html">YOUR ACCOUNT</a>
				<a href="login.html">PERSONAL INFORMATION</a> 
				<a href="login.html">ADDRESSES</a> 
				<a href="login.html">DISCOUNT</a>  
				<a href="login.html">ORDER HISTORY</a>
			 </div>
			<div class="span3">
				<h5>INFORMATION</h5>
				<a href="contact.html">CONTACT</a>  
				<a href="register.html">REGISTRATION</a>  
				<a href="legal_notice.html">LEGAL NOTICE</a>  
				<a href="tac.html">TERMS AND CONDITIONS</a> 
				<a href="faq.html">FAQ</a>
			 </div>
			<div class="span3">
				<h5>OUR OFFERS</h5>
				<a href="#">NEW PRODUCTS</a> 
				<a href="#">TOP SELLERS</a>  
				<a href="special_offer.html">SPECIAL OFFERS</a>  
				<a href="#">MANUFACTURERS</a> 
				<a href="#">SUPPLIERS</a> 
			 </div>
			<div id="socialMedia" class="span3 pull-right">
				<h5>SOCIAL MEDIA </h5>
				<a href="#"><img width="60" height="60" src={fb} title="facebook" alt="facebook"/></a>
				<a href="#"><img width="60" height="60" src={twitter} title="twitter" alt="twitter"/></a>
				<a href="#"><img width="60" height="60" src={youtube} title="youtube" alt="youtube"/></a>
			 </div> 
		 </div>
		<p class="pull-right">© Bootshop</p>
	</div>
	</div>
        </div>
    )
}

export default Footer
