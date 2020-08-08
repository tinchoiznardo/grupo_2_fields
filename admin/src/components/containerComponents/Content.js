import React from '../../../node_modules/react';
import MainContent from './content/MainContent'
import Chart from './content/Chart'
import Footer from './content/Footer'

function Content() {
  return (
	<div id="content-wrapper" className="d-flex flex-column">
		<MainContent />
    <Chart />
		<Footer />
    </div>
  );
}

export default Content;
