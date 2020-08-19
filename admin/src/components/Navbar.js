import React from 'react';

const style = {
    width: "25%",
    position: "fixed",
};

function Navbar() {
  return (
    <div style={style}>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>

		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr className="sidebar-divider my-0"></hr>

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Fields Outfitting</span></a>
			</li>

			<hr className="sidebar-divider"></hr>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Products</span>
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-user"></i>
					<span>Users</span></a>
			</li>

			<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
    </div>
  );
}

export default Navbar;
