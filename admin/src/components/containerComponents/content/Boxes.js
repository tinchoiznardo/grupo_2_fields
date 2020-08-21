import React from '../../../../node_modules/react';
import PropTypes from 'prop-types'

function Box({
    innerText,
    num
}) { 

    return (
        <div className="col-md-6 mb-6">
            <div className={`card border-left-primary shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-primary  text-uppercase mb-1`}>{innerText}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{num}</div>
                        </div>
                        <div className="col-auto">
                            {innerText == "Users"?<i className="fas fa-user-check fa-2x text-gray-300"></i>: <i className="fas fa-tshirt fa-2x text-gray-300"></i>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Box.propTypes = {
    innerText: PropTypes.string,
    num: PropTypes.string,
    icon: PropTypes.node,
    color: PropTypes.string
}

export default Box;


