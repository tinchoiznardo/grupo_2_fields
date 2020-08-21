import React, { useState, useEffect, Component } from '../../../../node_modules/react';
import product from "../../../assets/product_dummy.svg" ;
import Category from "./contentComponents/Category"
import Product from "./Product"
import Box from "./Boxes"
import { useSelector, useDispatch } from "react-redux"

export default function MainContent() {
    // const [products, setProducts] = useState([])
    // const [users, setUsers] = useState([])
    // const [lastProduct, setLastProduct] = useState(null)
    const dispatch = useDispatch()
    const users = useSelector(state => state.reducers.users)
    const products = useSelector(state => state.reducers.products)
    const lastProduct = useSelector(state => state.reducers.lastProduct)
    const productDetail = useSelector(state => state.reducers.productDetail)
    const userDetail = useSelector(state => state.reducers.userDetail)
    const productDetailId = useSelector(state => state.reducers.productDetailId)
    const userDetailId = useSelector(state => state.reducers.userDetailId)
    const edit = useSelector(state => state.reducers.edit)

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => {
            dispatch({type: "SET_PRODUCTS", payload: data.data})
            dispatch({type: "SET_LAST_PRODUCT", payload: data.data[data.data.length - 1]})

            // setProducts(data.data)
            // setLastProduct(data.data[data.data.length - 1])}
        })

        fetch('http://localhost:5000/api/users')
        .then(response => response.json())
        .then(data => {
            dispatch({type: "SET_USERS", payload: data.data})})
            // setUsers(data.data)})

    }, [])

    const showUserDetail = (mail) => {
        dispatch({type: "SET_USER_DETAIL_ID", payload: users.find(el  => el.mail === mail)})
        dispatch({type: "SET_USER_DETAIL", payload: true})
    }

    const goBack = () => {
        dispatch({type: "SET_USER_DETAIL", payload: false})
    }

    const editUser = async (id, category_id) => {
        fetch("http://localhost:5000/api/users/edit", {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify({id: id, category_id: category_id}), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
        userDetailId.category_id = category_id;
    }

    return (
        <div id="content">
            {productDetail? <Product id={productDetailId} />:
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

                <br></br>

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
                                <p><b>{lastProduct.name.toUpperCase()}</b></p>
                                <p><b>Price: </b>$ {lastProduct.price}</p>
                                <p><b>Description: </b>{lastProduct.description}</p>
                                <p><b>Category: </b>{lastProduct.category_id == 1 ?"Fields": "Walkers"}</p>
                                <p>{lastProduct.highlighted == 1 ?"Highlighted": ""}</p>
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
                                {userDetail ?
                                <div className="card-body">
                                <p><b>{userDetailId.first_name.toUpperCase() + " " + userDetailId.last_name.toUpperCase() }</b></p>
                                <p>{userDetailId.mail}</p>
                                <p>{userDetailId.adress}</p>
                                <p>{userDetailId.phone}</p>
                                <p onDoubleClick={()=>dispatch({type:"SET_EDIT",payload: !edit})}><b>Category: </b>{edit?<>
                                <select className="form-control" defaultValue={userDetailId.category_id} onChange={(e)=>editUser(userDetailId.id, e.target.value)}>
                                    <option value="1">Customer</option>
                                    <option value="2">Admin</option>
                                </select>
                                </> :userDetailId.category_id == 1 ?"Customer": "Admin"}</p>


                                <button className="btn btn-primary" onClick={()=> goBack()}>Back</button>
                                </div>
                                :users.map((el)=>{
                                     return(<ul onClick={()=>showUserDetail(el.mail)}>
                                        {el.first_name} {el.last_name}
                                        <ul>
                                        <li>{el.mail}</li>
                                        </ul>
                                        <hr></hr>
                                        </ul>)
                                })} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

