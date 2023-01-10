import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCarousel } from "../Components/HomePage/AddCarousel";
import { RecommendedMovies } from "../Components/HomePage/RecommendedMovies";
import { getLatestEvents, getLaughterEvents, getMovies, getOutdoorEvents, getPopularEvents } from "../Redux/app/actions";
import { getBookingDetails } from "../Redux/booking/action";

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getBookingDetails());
    }, [])
    return (
        <div style={{ backgroundColor: "#F2F5F9" }}>
            <AddCarousel />
            <RecommendedMovies />
        </div>
    )
}