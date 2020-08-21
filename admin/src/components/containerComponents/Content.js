import React from '../../../node_modules/react';
import MainContent from './content/MainContent'
import Chart from './content/Chart'
import Footer from './content/Footer'
import { useSelector, useDispatch } from "react-redux"

function Content() {
  const productDetail = useSelector(state => state.reducers.productDetail)
  const justProducts = useSelector(state => state.reducers.justProducts)

  return (
	<div id="content-wrapper" className="d-flex flex-column">
		{justProducts? "":<MainContent />}
      {productDetail? "": <Chart />}
		<Footer />
    </div>
  );
}

export default Content;
