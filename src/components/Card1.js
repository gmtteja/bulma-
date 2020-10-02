import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 3%;
  margin: 15px;
  padding: 10px;
  height: 1000px;
  width: 350px;
  line-height: 1em;

  .card {
    height: 600px;
  }
  .title {
    font-size: 1.5em;
    color: #444;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 0 5.4px;
  }
  .para {
    color: #696969;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .para2 {
    color: #696969;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: -5px;
    line-height: 2.25em;
  }
`;
const Card = () => (
  <div>
    <Container>
      <div className="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <header>
            <h2 className="title">Put something here</h2>
            <p className="para">Maybe here as well I think</p>
          </header>
          <p className="para2">
            Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
            Praesent sed semper amet bibendum tristique fringilla.
          </p>
        </div>
      </div>
    </Container>
  </div>
);
export default Card;
