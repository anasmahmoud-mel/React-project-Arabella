import React from 'react'
import "./Weathercard.css"

function Weathercard() {
    return (
        <div>
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center px-3">
            <div class="cardweather">
              <h2 className="ml-auto mr-4 mt-3 mb-0">Jareash</h2>
              <p className="ml-auto mr-4 mb-0 med-font">Snow</p>
              <h1 className="ml-auto mr-4 large-font">-70&#176;</h1>
              <p className="time-font mb-0 ml-4 mt-auto">08:30 <span class="sm-font">AM</span></p>
              <p className="ml-4 mb-4">Wednesday, 18 October 2019</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Weathercard
