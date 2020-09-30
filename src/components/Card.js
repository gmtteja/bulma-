import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon1 } from '@fortawesome/fontawesome-svg-core';

const Container = styled.div`
  .card {
    padding: 4.5em;
    height: 350px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    left: -8px;
    top: -40px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
  }
  .title {
    font-size: 58px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    top: -40px;
    left: -50px;
  }

  .para {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    color: #696969;
    position: relative;
    top: -40px;
    left: -50px;
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
    top: -300px;
    position: relative;
    left: 650px;
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
    left: 450px;
    line-height: 2em;
    letter-spacing: 0.01em;
    top: -270px;
    position: relative;
    left: 650px;
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

  .icon1 {
    position: relative;
    left: 92px;
    top: 10px;
  }
  .icon2 {
    position: relative;
    left: 70px;
    top: 10px;
    background-color: white;
    border-radius: 120%;
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
                <a className="data">Ok let's go </a>
                <a className="icon2">
                  <i className="fas fa-arrow-circle-right"></i>
                </a>
              </li>
              <li className="two">
                <a className="data2">More info</a>{' '}
                <a className="icon1">
                  <i class="fas fa-question-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Card;
