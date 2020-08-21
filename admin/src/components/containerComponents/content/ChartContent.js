import React from '../../../../node_modules/react';
import { useSelector, useDispatch } from "react-redux"

function ChartContent(
    {titles,
    data}
  ) {
  const products = useSelector(state => state.reducers.products)

  const dispatch = useDispatch()

  const productDetailShower = (id) => {
    dispatch({type: "SET_PRODUCT_DETAIL_ID", payload: id})
    dispatch({type: "SET_PRODUCT_DETAIL", payload: true})
  }

  return (
	<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
    <thead>
        <tr>
            {titles.map((el)=> <th key={el}>{el}</th>)}
        </tr>
    </thead>
    <tbody>
        
            {data.map((el) =>
            <tr key={el.name}>
            <td><a onClick={()=>productDetailShower(el.id)}>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</a></td>
            <td>{el.price}</td>
            <td>{el.id}</td>
            </tr>)}
        
    </tbody>
</table>
  );
}

export default ChartContent;




