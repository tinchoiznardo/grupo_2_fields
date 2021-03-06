import React from '../../../node_modules/react';
import logo from "../../assets/FieldsLogo.png" ;

function Topbar() {
  return (
    <div>
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					<ul className="navbar-nav ml-auto">

						<div className="topbar-divider d-none d-sm-block"></div>

						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Fields Admin</span>
								<img className="img-profile rounded-circle" src={logo} width="60" />
							</a>
						</li>

					</ul>

				</nav>
    </div>
  );
}

export default Topbar;
