import React from 'react';

function RenderRestaurant(props) {
    return (
        <div className="Restaurant">
            <div className="resImg">
                <img src={props.restaurant.imgUrl} height="150" width="250"/>
            </div>
            <div><button className="avalability-btn" value={props.restaurant.name}
                onClick={() => {props.renderRestComponent(!props.initRestaurant); props.renderCalendar(true);}}>
                <i className="fa fa-angle-double-right fa-3x"></i></button></div>
            <div className="RestaurantHeader">
                <h4 >{props.restaurant.name}</h4>
            </div>
            <div className="rating">
                <p >{props.restaurant.rating}/5</p>
            </div>
            <div className ="rDescription">
                <p >{props.restaurant.description}</p>
            </div>
        </div>
    )
}

export default RenderRestaurant

