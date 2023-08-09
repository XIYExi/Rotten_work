import React from 'react';
import './index.css';
import MeetPage from "./Meet";
import MapPage from "./Map";
import LatestPage from "./Latest";
import HomePage from "./Home";
import UpcomingPage from "./Upcoming";



export default function HomeIndex() {

    return(
        <>
            <HomePage />
            <LatestPage />
            <MapPage />
            <MeetPage />
            <UpcomingPage />
        </>
    )
}
