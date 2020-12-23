import React, { useState } from 'react'
import "./../assest/style/header.css"
import logo from "./../assest/themes/images/logo.png"
import Card from './Card'
import {useCountState} from "./../ContextStateProvider"
import RemoveCard from './RemoveCard'



function Heder() {
    let [open,setOpen]=useState("close")
    let [state,dispatch]=useCountState()


    const change =()=>{
        console.log(open)
        if(open==="close"){
            setOpen("run");
            return 0;
        }else{

            setOpen("close")
        }
        console.log(open)

    }


    return (
        <div id="header">
            <div class="container">
                <div id="welcomeLine" class="row">
                    <div class="span6">Welcome!<strong> User</strong></div>
                    <div class="span6">
                        <div class="pull-right" >
                            {/*<div href="product_summary.html"><span class="">Fr</span></div>
                           <div href="product_summary.html"><span class="">Es</span></div>
                            <span class="btn btn-mini">En</span>
                           <div href="product_summary.html"><span>&pound;</span></div>
                            <span class="btn btn-mini">$155.00</span>
                           <div href="product_summary.html"><span class="">$</span></div> */}
                           <div href=" ">
                                <span class="btn btn-mini btn-primary" onClick={change}>
                                    <i class="icon-shopping-cart icon-white"></i>
                                    [ {state.cart.length}] Itemes in your cart 
                                </span>
                                <div className={`cart_list ${open}`} >
                                    {
                                        state.cart.length>0?(state.cart.map((e)=><RemoveCard img={e.img} id={e.id} />)):(<div>no items</div>)
                                    }
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div id="logoArea" class="navbar">
                   <div id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                    <div class="navbar-inner">
                       <div class="brand" href="index.html">Our show to shop</div>
                        <form class="form-inline navbar-search" method="post" action="products.html" >
                            <input id="srchFld" class="srchTxt" type="text" />
                            <select class="srchTxt">
                                <option>All</option>
                                <option>CLOTHES </option>
                                <option>FOOD AND BEVERAGES </option>
                                <option>HEALTH & BEAUTY </option>
                                <option>SPORTS & LEISURE </option>
                                <option>BOOKS & ENTERTAINMENTS </option>
                            </select> 
                            <button type="submit" id="submitButton" class="btn btn-primary">Go</button>
                        </form>
                        <ul id="topMenu" class="nav pull-right">
                            <li class="">
                               <div href="#login" role="button" data-toggle="modal" style={{"padding-right":"0","margin-top":"10px"}}><span class="btn btn-large btn-success">Login</span></div>
                                <div id="login" class="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h3>Login Block</h3>
                                    </div>
                                    <div class="modal-body">
                                        <form class="form-horizontal loginFrm">
                                        <div class="control-group">								
                                            <input type="text" id="inputEmail" placeholder="Email"  />
                                        </div>
                                        <div class="control-group">
                                            <input type="password" id="inputPassword" placeholder="Password" />
                                        </div>
                                        <div class="control-group">
                                            <label class="checkbox">
                                                <input type="checkbox" /> Remember me
                                            </label>
                                        </div>
                                        </form>		
                                        <button type="submit" class="btn btn-success">Sign in</button>
                                        <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heder
