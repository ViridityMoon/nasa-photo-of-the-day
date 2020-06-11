import React from 'react';
import Container from './Container'

function Content ({data}) {
    return(
    <section className = 'content'>
        <Container >
            <img src = {data.url} alt='nasaPhoto'></img>
            <h3>{data.title} - {data.copyright}</h3>
            <p>{data.explanation}</p>
        </Container>
    </section>
    );
}

export default Content