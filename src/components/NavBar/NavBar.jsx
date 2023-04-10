import React from "react"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>StreetWear</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar