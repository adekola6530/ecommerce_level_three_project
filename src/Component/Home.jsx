import React from 'react'
import pad from '../Images/pad.png'
import monitor from '../Images/monitor.png'

const Home = () => {
    return (
        <div className='container'>
            <h5>Home/Cart</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><img src={monitor} alt="" /><span className='ms-3 fs-5'>LCD Monitor</span></th>
                        <td>#90000</td>
                        <td><div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                2
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li><a class="dropdown-item" href="#">3</a></li>
                            </ul>
                        </div></td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src={pad} alt="" /><span className='ms-3 fs-5'>H1 Gamepad</span></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Home