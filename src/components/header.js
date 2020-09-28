// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import 'fontsource-oleo-script';

const Container = styled.div`
  h1 {
    position: relative;
    left: -30px;
    margin: 60px;
    font-family: 'Oleo Script', serif;
    line-height: 0.7;
    background: #ff4486;
    color: #fff;
    border-radius: 6px;
    font-weight: 400;
    padding: 5px;
    font-size: 4.25em;
    letter-spacing: 0.05em;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    position: relative;
    left: -90px;
    font-weight: 800;
    line-height: 4.5em;
    letter-spacing: 0.025em;
    font-size: 0.9em;
    vertical-align: middle;
    margin: 0 0 0 1.25em;
    color: #696969;
  }

  a1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-block;
    vertical-align: middle;
    letter-spacing: 0.05em;
    line-height: 2em;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 0 10em;
    background-color: #444;
    height: 37px;
    width: 115px;
    border-radius: 6px;
    text-align: center;
    position: relative;
    top: -1px;
    left: -80px;
    cursor: pointer;
  }

  .left {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-block;
    vertical-align: middle;
    letter-spacing: 0.01em;
    line-height: 2.1em;
    font-weight: 800;
    color: #696969;
    margin: 0 0 0 10em;
    height: 37px;
    width: 130px;
    border-radius: 6px;
    text-align: center;
    position: relative;
    top: -1px;
    left: -210px;
    cursor: pointer;
  }

  .right {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-block;
    vertical-align: middle;
    letter-spacing: 0.01em;
    line-height: 2.1em;
    font-weight: 800;
    color: #696969;
    margin: 0 0 0 10em;
    height: 37px;
    width: 140px;
    border-radius: 6px;
    text-align: center;
    position: relative;
    top: -111px;
    left: 780px;
    cursor: pointer;
  }
  .no {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-block;
    vertical-align: middle;
    letter-spacing: 0.01em;
    line-height: 2.1em;
    font-weight: 800;
    color: #696969;
    margin: 0 0 0 10em;
    height: 37px;
    width: 140px;
    border-radius: 6px;
    text-align: center;
    position: relative;
    top: -111px;
    left: 600px;
    cursor: pointer;
  }

  a:hover {
    background-color: #ffffff;
  }

  .dropbtn {
    background-color: inherit;
    color: #696969;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    padding: 16px;
    border: none;
    font-size: 18px;
    position: relative;
    top: 60px;
    left: -50px;
    border-radius: 6px;
    vertical-align: middle;
    letter-spacing: 0.01em;
    line-height: 1.5em;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 200%;
    left: -50%;
    background-color: #f1f1f1;

    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #ffffff;
  }
`;
const Header = ({ siteTitle }) => (
  <div>
    <header>
      <Container>
        {/* <div class="Container">
          <section class="section"> */}
        <a>
          <h1 className="verti">verti</h1>
        </a>
        <span>by HTML5UP</span>
        <a href="https://www.bbc.co.uk/">
          <a1>Welcome</a1>{' '}
        </a>
        <a>
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </a>

        <a className="left">
          <a2>Left Sidebar</a2>
        </a>
        <a className="right">
          <a3>Right Sidebar</a3>
        </a>
        <a className="no">
          <a4>No Sidebar</a4>
        </a>
        {/* </section>
        </div> */}
      </Container>
    </header>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
