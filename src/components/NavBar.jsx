import React from "react";

export const NavBar = ( { NavBar } )

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="images/logo_small_icon_only_inverted.png" alt="logo" width="50" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="{./App}">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="{./components/Products}">Productos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Contacto</a>
                        </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

// export default NavBar