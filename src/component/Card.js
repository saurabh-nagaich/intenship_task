import React from 'react'
import {useCountState} from "./../ContextStateProvider"

function Card({img,id}) {

    let [state,dispatch]=useCountState()

    const addToCart=(img,id)=>{
        dispatch({type:"addCart",payload:{img,id}})
        // console.log(state)
    }

    return (
        <div>
            <li class="span3" id={id}>
                <div class="thumbnail">
                    <a href="#"><img src={img} alt="" /></a>
                    <div class="caption">
                        <h5>Product name</h5>
                        <p> 
                            Lorem Ipsum is simply dummy text. 
                        </p>
                        <h4 style={{"text-align":"center"}}>
                            <a class="btn" href="product_details.html"> 
                                <i class="icon-zoom-in"></i>
                            </a> 
                            <div class="btn" style={{"margin-left":"5px","margin-right":"5px"}} onClick={()=>addToCart(img,id)}>
                                Add to <i class="icon-shopping-cart"></i>
                            </div> 
                            <a class="btn btn-primary" href="#">Rs 222.00</a>
                        </h4>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Card
