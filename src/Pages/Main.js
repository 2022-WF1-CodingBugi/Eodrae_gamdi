import React from "react";
import Carousel from "react-material-ui-carousel";
//import {Paper, Button, requirePropFactory} from "@mui/material";

import main_logo from "./images/main_logo.png"
import food_category from "./images/food.png"
import activity_category from "./images/activity.png"
import lodging_category from "./images/lodging.png"
import attraction_category from "./images/attraction.png"

import food from '../Data/food';
import activity from '../Data/activity';
import lodging from '../Data/lodging';
import attraction from '../Data/attraction';

import "./Main.css";
import Category from "./Category";

const Main = ({ onChange = f => f }) => {

    const createCarousel = (data) => {
        return (
            <div className="carousel_div">
                <img className="carousel_img" src={data.image} alt={data.name}/>
            </div>
        )
    }

    return (
        <>
            <header id="header">
                <img id="main_logo" src={main_logo} alt="어드레감디" />
            </header>
            <section style={{marginTop: "50px", marginBottom: "100px"}}>
                <Category name="food" src={food_category} onChangePage={onChange} />
                <Category name="activity" src={activity_category} onChangePage={onChange} />
                <Category name="lodging" src={lodging_category} onChangePage={onChange} />
                <Category name="attraction" src={attraction_category} onChangePage={onChange} />
            </section>
            <seciton>
                <Carousel indicators={false}>
                    {
                        food.map( (d, i) => createCarousel(d))
                    }
                    {
                        activity.map( (d, i) => createCarousel(d))
                    }
                    {
                        lodging.map( (d, i) => createCarousel(d))
                    }
                    {
                        attraction.map( (d, i) => createCarousel(d))
                    }
                </Carousel>
            </seciton>
        </>
    )
}

export default Main;