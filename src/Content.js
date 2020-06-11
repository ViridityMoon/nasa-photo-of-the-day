import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './Constants'

function Content ({data}) {
    return(
    <div>
        <img src = {data.url} alt='nasaPhoto'></img>
        <h3>{data.title} - {data.copyright}</h3>
        <p>{data.explanation}</p>
    </div>
    );
}

export default Content