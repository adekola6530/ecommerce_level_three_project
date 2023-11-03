import React from "react";
import System from "../Images/gaming_system.png"
import Keyboard from "../Images/Keyboard.png"
import Chair from "../Images/Chair.png"
import Monitor from "../Images/Gaming_monitor.png"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

const Cards = () => {
    return (
        <div>
            <div className="container mt-5 py-1">
                <div className="row">
                    <div className=" col-md-3">
                        <div style={{ height: "25rem", }}>
                            <div style={{ height: '100%' }}>
                                <div style={{ height: '70%', background: '#f5f5f5', padding: '3rem' }}>
                                    <div className=" fs-4  bg-white rounded-circle" style={{marginLeft: '10rem'}}>
                                    <RiDeleteBin6Line/>
                                    </div>
                                    <img src={System} className="card-img-top img-fluid   mx-auto" alt="..." />
                                </div>
                                <div className="">
                                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                                        <AiOutlineShoppingCart />
                                        <span className="ms-2 pt-2 pb-2">Add to cart</span>
                                    </button>
                                    <p className="fs-5 pt-3">
                                    ASUS FHD Gaming Laptop
                                    </p>
                                    <small className="text-danger fs-5">#200000</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <div style={{ height: "25rem", }}>
                            <div style={{ height: '100%' }}>
                                <div style={{ height: '70%', background: '#f5f5f5', padding: '3rem' }}>
                                    <img src={Keyboard} className="card-img-top img-fluid   mx-auto" alt="..." />
                                </div>
                                <div className="">
                                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                                        <AiOutlineShoppingCart />
                                        <span className="ms-2 pt-2 pb-2">Add to cart</span>
                                    </button>
                                    <p className="fs-5 pt-3">
                                    AK-900 Wired Keyboard
                                    </p>
                                    <small className="text-danger fs-5">#90000</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <div style={{ height: "25rem", }}>
                            <div style={{ height: '100%' }}>
                                <div style={{ height: '70%', background: '#f5f5f5', padding: '3rem' }}>
                                    <img src={Chair} className="card-img-top img-fluid   mx-auto w-75 pb-5" alt="..." />
                                </div>
                                <div className="">
                                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                                        <AiOutlineShoppingCart />
                                        <span className="ms-2 pt-2 pb-2">Add to cart</span>
                                    </button>
                                    <p className="fs-5 pt-3">
                                    S-Series Comfort Chair 
                                    </p>
                                    <small className="text-danger fs-5">#15000</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <div style={{ height: "25rem", }}>
                            <div style={{ height: '100%' }}>
                                <div style={{ height: '70%', background: '#f5f5f5', padding: '3rem' }}>
                                    <img src={Monitor} className="card-img-top img-fluid   mx-auto" alt="..." />
                                </div>
                                <div className="">
                                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                                        <AiOutlineShoppingCart />
                                        <span className="ms-2 pt-2 pb-2">Add to cart</span>
                                    </button>
                                    <p className="fs-5 pt-3">
                                    IPS LCD Gaming Monitor 
                                    </p>
                                    <small className="text-danger fs-5">#90000</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
