import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './Constants';
import Content from './Content';
import Container from './Container';

function Header () {
    const [data, setData] = useState({});
    useEffect(() => {
        axios
          .get(BASE_URL)
          .then(res => {
           console.log('name the log', res.data)
           setData(res.data);
          })
          .catch(error => {
          console.log('name the log', error)
          })
          }, []);
    
    return (
        <Container>
            <header>
                <h1>NASA Photo of the Day</h1>
                <h2>Date: {data.date}</h2>
            </header>
            <Content data = {data} />
        </Container>
    );
}

export default Header