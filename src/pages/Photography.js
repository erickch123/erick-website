import * as React from "react";
import Feed from "react-instagram-authless-feed"
import instafeed from 'react-instafeed'

const options = {
    accessToken: 'access...',
    clientId: 'client...',
    get: 'user', // popular, user
    locationId: null,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 123,
  }
export default function Photography() {
    return (
        <><h1>In Progress</h1>
        <Feed username="erickkkk_photos" /></>
        );  
    }