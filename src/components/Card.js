import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
// import { arrowcircleright } from '@fortawesome/free';
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';

const Container = styled.div`
  .card {
    height: 350px;
    max-width: 100%;
    width: 12000px;
  }
  .title {
    font-size: 58px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .para {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    color: #696969;
  }
  .one {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 39px;
    background-color: #0090c5;
    font-weight: 800;
    position: relative;
    left: 550px;
    line-height: 2em;
    letter-spacing: 0.01em;
    top: -250px;
    position: relative;
    left: 480px;
    border-radius: 10px;
    width: 350px;
    height: 100px;
  }
  .data {
    color: #ffffff;
    position: relative;
    left: 22px;
    top: 8px;
  }
  .two {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 39px;
    background-color: #f1f1f1;
    font-weight: 800;
    position: relative;
    left: 550px;
    line-height: 2em;
    letter-spacing: 0.01em;
    top: -250px;
    position: relative;
    left: 480px;
    border-radius: 10px;
    width: 350px;
    height: 100px;
  }
  .data2 {
    color: #444;
    position: relative;
    left: 25px;
    top: 8px;
  }
`;

const Card = () => (
  <div>
    <Container>
      <div className="card">
        <div class="card-content">
          <h2 className="title">HI. This is Verti.</h2>
          <p className="para">
            It's a free responsive site <br />
            template by HTML5 UP
          </p>
          <div>
            <ul>
              <li className="one">
                <a className="data">
                  Ok let's go
                  {/* <i class="fas fa-arrow-circle-right"></i> */}
                </a>
              </li>
              <li className="two">
                <a className="data2">More info</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Card;
