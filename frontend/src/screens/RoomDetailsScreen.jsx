import React from 'react'

function RoomDetailsScreen() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/uploads/gallery/gallery-1602345653856.png" class="d-block w-100" alt="carousel-image"/>
                    </div>
                    <div class="carousel-item">
                    <img src="/uploads/gallery/gallery-1602345653856.png" class="d-block w-100" alt="carousel-image"/>
                    </div>
                    <div class="carousel-item">
                    <img src="/uploads/gallery/gallery-1602345653856.png" class="d-block w-100" alt="carousel-image"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="container">
            <div class="row">
                <div class="col-sm-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore et iusto sequi ea iste error officia maxime qui ut placeat? Esse dolorem iusto animi, nihil ab doloribus cupiditate nam aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam inventore accusantium autem, voluptatibus quia possimus nesciunt eius praesentium facere, provident reprehenderit adipisci asperiores quam rerum iure fuga magnam est! Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit libero aliquid quidem corporis sapiente rerum optio harum nostrum ut est sed nulla, suscipit deserunt praesentium facilis quibusdam dicta quaerat.
                </div>
                <div className="col-sm-1"></div>
                <div class="col-sm-5">
                        <ul class='list'>
                            <li>Rooms sdhbsjhbsdhb</li>
                            <li>Rooms</li>
                            <li>Rooms</li>
                            <li>Rooms</li>
                            <li>Rooms</li>
                        </ul>
                        <a href="#" class='btn btn-primary'>Book Now</a>
                </div>
            </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <ul class='list'>
                            <li>feature1</li>
                            <li>feature1</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul class='list'>
                            <li>feature2</li>
                            <li>feature2</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul class='list'>
                            <li>feature3</li>
                            <li>feature3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomDetailsScreen
