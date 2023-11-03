import React from "react";
import frame from "../Images/frame.png";
import gamepad from "../Images/gamepad.png";
import bag from "../Images/bag.png";
import gamma from "../Images/gamma.png";
import icon from "../Images/garden_cart.png";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Card = () => {
  return (
    <div>
      <div class="container mt-5 py-1">
        <h5 className="mb-5">Wishlist (4)</h5>
        <div className="row">
          <div className=" col-md-3">
            <div style={{ height: "25rem",}}>
              <div style={{height : '100%'}}>
              <div style={{height: '70%', background: '#f5f5f5', padding: '3rem'}}>
              <img src={gamepad} className="card-img-top img-fluid   mx-auto" alt="..." />
              </div>
                <div className="">
                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                            <AiOutlineShoppingCart/>
                            <span className="ms-2 pt-2 pb-2">Add to cart</span>
                    </button>
                  <p className="fs-5 pt-3">
                    Gaming Pad
                  </p>
                  <small className="text-danger fs-5">#15000</small>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-3">
            <div style={{ height: "25rem",}}>
              <div style={{height : '100%'}}>
              <div style={{height: '70%', background: '#f5f5f5', padding: '3rem'}}>
              <img src={frame} className="card-img-top img-fluid   mx-auto" alt="..." />
              </div>
                <div className="">
                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                            <AiOutlineShoppingCart/>
                            <span className="ms-2 pt-2 pb-2">Add to cart</span>
                    </button>
                  <p className="fs-5 pt-3">
                    Quilted Satin Jacket
                  </p>
                  <small className="text-danger fs-5">#10000</small>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-3">
            <div style={{ height: "25rem",}}>
              <div style={{height : '100%'}}>
              <div style={{height: '70%', background: '#f5f5f5', padding: '3rem'}}>
              <img src={bag} className="card-img-top img-fluid   mx-auto" alt="..." />
              </div>
                <div className="">
                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                            <AiOutlineShoppingCart/>
                            <span className="ms-2 pt-2 pb-2">Add to cart</span>
                    </button>
                  <p className="fs-5 pt-3">
                    Gucci duffle bag
                  </p>
                  <small className="text-danger fs-5">#4950</small>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-3">
            <div style={{ height: "25rem",}}>
              <div style={{height : '100%'}}>
              <div style={{height: '70%', background: '#f5f5f5', padding: '3rem'}}>
              <img src={gamma} className="card-img-top img-fluid   mx-auto" alt="..." />
              </div>
                <div className="">
                    <button className="text-center bg-dark w-100 h-7 fs-5 text-white">
                            <AiOutlineShoppingCart/>
                            <span className="ms-2 pt-2 pb-2">Add to cart</span>
                    </button>
                  <p className="fs-5 pt-3">
                    RGB Liquid CPU cooler
                  </p>
                  <small className="text-danger fs-5">#5900</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
