import React from 'react'

function Services() {
    return (
        <div class="container-fluid">
        <section id="services">
        <h1 style={{textAlign:"center", color:"#f0932b", padding:"10px"}}>Services</h1>
        <div class="row">
            <div class="col-4">
            <div class="card" style={{border:"solid 2px #f0932b", boxShadow:"0 5px 10px rgba(0,0,0,0.3)",borderRadius:"5px"}}>
                <div class="card-body">
                    <h3 class="card-title text-center" style={{color:"#f0932b"}}><i class="fa fa-beer"  aria-hidden="true"></i></h3>
                    <h3 class="card-title text-center">Free Beer</h3>
                    <p class="card-text text-center text-muted">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                </div>
            </div>
            </div>
            <div class="col-4">
            <div class="card" style={{border:"solid 2px #f0932b", boxShadow:"0 5px 10px rgba(0,0,0,0.3)",borderRadius:"5px"}}>
                <div class="card-body">
                    <h3 class="card-title text-center" style={{color:"#f0932b"}}><i class="fa fa-car" aria-hidden="true"></i></h3>
                    <h3 class="card-title text-center">Free Shuttle</h3>
                    <p class="card-text text-center text-muted">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                </div>
            </div>
            </div>
            <div class="col-4">
            <div class="card" style={{border:"solid 2px #f0932b", boxShadow:"0 5px 10px rgba(0,0,0,0.3)",borderRadius:"5px"}}>
                <div class="card-body">
                    <h3 class="card-title text-center" style={{color:"#f0932b"}}><i class="fa fa-glass" aria-hidden="true"></i></h3>
                    <h3 class="card-title text-center">Free Wine</h3>
                    <p class="card-text text-center text-muted">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
    )
}

export default Services;
