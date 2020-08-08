import React from 'react';

function Category({ num }) {
  return (
    <div className="col-lg-6 mb-4">
    <div className="card bg-info text-white shadow">
        <div className="card-body">
            Category {num}
        </div>
    </div>
    </div>
  );
}

export default Category;
