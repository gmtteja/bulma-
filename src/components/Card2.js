import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  left: 35%;
  margin: 15px;
  padding: 10px;
  background-color: yellow;
`;
const Card2 = () => (
  <Card>
    <div class="Card">
      <div class="card-image">
        <img src="https://sites.create-cdn.net/siteimages/25/7/0/257060/66/9/0/6690841/373x296.jpg" />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content"></div>
        </div>

        <div class="content">
          <b>PUT SOMETHING INTRESTING</b>
          <br />
          <br />
          Phasellus quam turpis, <br />
          hendrerit in lectus. <br />
          Praesent sed semper amet <br /> tristique fringilla.
          <br />
        </div>
      </div>
    </div>
  </Card>
);
export default Card2;
