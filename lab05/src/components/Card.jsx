import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({ overViewData }) => {
    const isPositive = overViewData.period >= 0;
    const arrow = isPositive ? '▲' : '▼';
    const textColor = isPositive ? 'text-success' : 'text-danger';

    return (
        <div className="card" style={{ backgroundColor: overViewData.bg }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        <h6 className="fw-bold">{overViewData.name}</h6>
                        <h3 className="card-title fw-bold">${overViewData.profit}</h3>
                    </div>
                    <div className="col-2">
                        <img src={overViewData.img} alt="" />
                    </div>
                </div>
                <div className="row">
                    <p className={`${textColor} mb-0`}>
                        {arrow} {Math.abs(overViewData.period)}% period of change
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card