import React from '../../../../node_modules/react';

function ChartContent(
    {titles,
    data}
) {
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
            <td>{el.name}</td>
            <td>{el.price}</td>
            <td>{el.id}</td>
            </tr>)}
        
    </tbody>
</table>
  );
}

export default ChartContent;




