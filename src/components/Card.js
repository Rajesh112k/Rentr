// Card.js
import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

function Card({ data }) {
  return (
    <Link to="/prop">
      <div class="propCard">
            <img class="card-img-top" src={data.image} alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">
                    <div className="propCardDetails">
                        <div className="propCardTitle">
                            <div className="propCardName">{data.description}</div>
                            <div className="propCardAddress">{data.Address}</div>
                        </div>
                        <div className="propCardPrice">
                            $969 - $1,629/mo
                        </div>
                    </div>
                </p>
            </div>
            </div>
    </Link>
  );
}

export default Card;
