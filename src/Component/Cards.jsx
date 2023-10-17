import React from "react";
import System from "../Images/gaming_system.png"
import Keyboard from "../Images/Keyboard.png"
import Chair from "../Images/Chair.png"

const Cards = () => {
    return (
        <div>
            <div class="container mt-5 py-1">
                <div class="row bg-white">
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={System} class="w-50 mx-auto" alt="Image 1" />
                            <div class="card-body bg-black">
                                <p class="card-text text-center">add to cart</p>
                            </div>
                        </div>
                        <p>Gaming Laptop</p>
                        <small className="text-danger">#59990</small>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={Keyboard} class="w-50 mx-auto" alt="Image 2" />
                            <div class="card-body bg-black mt-5">
                                <p class="card-text text-center">add to cart.</p>
                            </div>
                        </div>
                        <p>Wired keyboard</p>
                        <small className="text-danger">#4990</small>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm bg-body-tertiary rounded">
                            <img src={Chair} class="w-25 mx-auto" alt="Image 3" />
                            <div class="card-body bg-black mt-4">
                                <p class="card-text text-center">add to cart</p>
                            </div>
                        </div>
                        <p>S-Series Comfort Chair</p>
                        <small className="text-danger">#3400</small>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src={Chair} class="w-25 mx-auto" alt="Image 4" />
                            <div class="card-body bg-black mt-4">
                                <p class="card-text text-center">add to cart</p>
                            </div>
                        </div>
                        <p>RGB Liquid CPU Cooler</p>
                        <small className="text-danger">#5000</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
