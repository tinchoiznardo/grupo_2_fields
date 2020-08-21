import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Product({id}) {
    const products = useSelector(state => state.reducers.products)
    const product = products.filter(el => el.id == id)
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch({type: "SET_PRODUCT_DETAIL", payload: false})
    }

    return (
        <div>
            <div className="col-lg-12 mb-12">
                <div className="card shadow mb-12">
                    <div className="card-header py-12">
                        <h6 className="m-0 font-weight-bold text-primary">Product Detail</h6>
                    </div>
                    {product?
                    <div className="card-body">
                        <b>{product[0].name.charAt(0).toUpperCase() + product[0].name.slice(1)}</b>
                        <p>$ {product[0].price}</p>
                        <p><b>Description: </b>{product[0].description}</p>
                        <p><b>Category: </b>{product[0].category_id == 1 ?"Fields": "Walkers"}</p>
                        <p>{product[0].highlighted == 1 ?"Highlighted": ""}</p>
                        <button className="btn btn-primary" onClick={()=> goBack()}>Back</button>
                    </div>: ""}
                </div>
            </div>
        </div>
    )
}
