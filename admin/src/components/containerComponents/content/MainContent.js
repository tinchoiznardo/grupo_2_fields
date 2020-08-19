import React, { useState, useEffect, Component } from '../../../../node_modules/react';
import product from "../../../assets/product_dummy.svg" ;
import Category from "./contentComponents/Category"
import Box from "./Boxes"

export default function MainContent() {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [lastProduct, setLastProduct] = useState(null)
    

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
            setLastProduct(data.data[data.data.length - 1])}
        )

        fetch('http://localhost:5000/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.data)})

    }, [])

    return (
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                <div className="row">

                <Box key="products"
                innerText="Products"
                num= {products.length}
                />

                <Box key="users"
                innerText="Users"
                num= {users.length}
                />

                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                            </div>
                            {lastProduct?
                            <div className="card-body">
                                {/* <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={lastProduct.image} alt="image dummy" />
                                </div> */}
                                <p>{lastProduct.name}</p>
                                <p>{lastProduct.price}</p>
                                {/* <a target="_blank" rel="nofollow" href="/">View product detail</a> */}
                            </div>: ""}
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Users</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    
                                {users.map((el)=>{
                                     return(<ul>
                                        <li>{el.first_name} {el.last_name}</li>
                                        <li>{el.mail}</li>
                                        <hr></hr>
                                        </ul>)
                                })} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


