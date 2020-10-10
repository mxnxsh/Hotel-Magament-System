import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <div className="container-fluid">
      <header>
        <div
          class="p-5 text-center bg-image"
          style={{background: "url('/uploads/cover.webp')",backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundAttachment:"fixed",height: "400px"}}>
          <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
              <h1 className="text-capitalize">
                welcome to <strong className="banner-title">Beach Resort</strong>
              </h1>
              <h3>Luxurious Rooms Staring at <strong className="banner-title">$500</strong></h3>
              <Link to="/rooms" className="btn banner-link text-uppercase mb-2">explore</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
}

export default Header
