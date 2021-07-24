import React from 'react'
import { Link } from 'wouter'

function Menu(){
  return(
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  Home
                </div>
              </li>
              <li>
              <a href="/code-challenge-springs-frontend" className="nav-link px-3 active">
                  <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                  <span>Inicio</span>
                </a>
              </li>
              <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Interface
                </div>
              </li>
              <li>
                <Link href="/cobre" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-book-fill"></i></span>
                  <span>Libra de cobre</span>
                </Link>
              </li>

              <li>
                <Link href="/unemployment" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-person-x"></i></span>
                  <span>Tasa de desempleo</span>
                </Link>
              </li>

              <li>
                <Link href="/imacec" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-bank"></i></span>
                  <span>Imacec</span>
                </Link>
              </li>

              <li>
                <Link href="/euro" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-currency-euro"></i></span>
                  <span>Euro</span>
                </Link>
              </li>

              <li>
                <Link href="/dolar" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-cash"></i></span>
                  <span>Dólar observado</span>
                </Link>
              </li>

              <li>
                <Link href="/dolar-deal" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-currency-exchange"></i></span>
                  <span>Dólar acuerdo</span>
                </Link>
              </li>

              <li>
                <Link href="/UF" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-currency-dollar"></i></span>
                  <span>Unidad de fomento (UF)</span>
                </Link>
              </li>

              <li>
                <Link href="/UTM" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-wallet"></i></span>
                  <span>Unidad Tributaria Mensual (UTM)</span>
                </Link>
              </li>

              <li>
                <Link href="/bitcoin" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-currency-bitcoin"></i></span>
                  <span>Bitcoin</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Menu