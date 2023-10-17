import React from 'react'
import frame from '../Images/frame.png'
import gamepad from "../Images/gamepad.png"
import bag from "../Images/bag.png"
import gamma from "../Images/gamma.png"
import icon from "../Images/garden_cart.png"

const Card = () => {
    return (
        <div>
            
            <div class="container mt-5 py-1">
            <h5 className='mb-5'>Wishlist (4)</h5>
                <div class="row bg-white">
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={frame} class="w-50 mx-auto" alt="Image 1" />
                            <div class="card-body bg-black">
                                <p class="card-text text-center text-white">add to cart</p>
                            </div>
                        </div>
                        <p>Quilted Satin Jacket</p>
                        <small className='text-danger'>#500</small>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={gamepad} class="w-50 mx-auto" alt="Image 2" />
                            <div class="card-body bg-black mt-3">
                                <p class="card-text text-center text-white">add to cart.</p>
                            </div>
                            
                        </div>
                        <p>Shooter USB Gamer</p>
                        <small className='text-danger'>#4500</small>

                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={bag} class="w-50 mx-auto" alt="Image 3" />
                            <div class="card-body bg-black mt-4">
                                <p class="card-text text-center text-white">add to cart</p>
                            </div>
                        </div>
                        <p>Gucci Duffle bag</p>
                        <small className='text-danger'>#3500</small>

                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={gamma} class="w-75 mx-auto" alt="Image 4" />
                            <div class="card-body bg-black mt-4">
                                <p class="card-text text-center text-white">add to cart</p>
                            </div>
                        </div>
                        <p>RGB Liquid CPU Cooler</p>
                        <small className='text-danger'>#5000</small>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card