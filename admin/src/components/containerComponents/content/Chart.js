import React, { useState, useEffect } from '../../../../node_modules/react';
import ChartContent from './ChartContent'

function Chart() {
    const [products, setProducts] = useState([])
    const data = [
        ['name', 'price', 'id'],
        products
        ]

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)}
        )

    }, [])
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <ChartContent 
                    titles={data[0]}
                    data={data[1]}
                    />
                </div>
            </div>
        </div>
    );
    }

export default Chart;


