import React, { useState, useEffect } from '../../../../node_modules/react';
import ChartContent from './ChartContent'
import { useSelector, useDispatch } from "react-redux"

function Chart() {
    const products = useSelector(state => state.reducers.products)
    const dispatch = useDispatch()
    const data = [
        ['name', 'price', 'id'],
        products
        ]

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


