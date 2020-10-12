import React from 'react';
import styled from 'styled-components';
const Container = styled.div`

  .title {
    font-size: 21.6px;
    color: #444444;
    position: relative;
    top: 25px;
    margin: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .col-6 {
    padding: 20px 0 0 20px;

  }
  .img1 {
    display: block;
    width: 100%;
    border-radius: 6px;
    position: relative;
    left: 5px;
  }
  .img2 {
    display: block;
    width: 100%;
    border-radius: 6px;
    position: relative;
    top: -155px;
    left: 155px;
  }
  .img3 {
    display: block;
    width: 100%;
    border-radius: 6px;
    position: relative;
    top: -155px;
    left: 155px;
  }
  .img4 {
    display: block;
    width: 100%;
    border-radius: 6px;
    position: relative;
    top: -311px;
    left: 5px;
  }
  .title2 {
    font-size: 2.25em;
    margin: 0 0 1.1em 0;
    line-height: 1em;
    color: #444;
    font-weight: 800;
    font-family: 'Open Sans' sans-serif;
    margin: 0 0 39.6px;
    position: relative;
    top: -670px;
    left: 400px;
  }
  .para1 {
    margin-bottom: 2em;
    margin: 5px;
    line-height: 2em;
    padding: 5px;
    border: 0;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    vertical-align: baseline;
    position: relative;
    top: -680px;
    left: 390px;
    color: #696969;
  }
  .para2 {
    color: #696969;
    margin-bottom: 2em;
    margin: 5px;
    line-height: 2em;
    padding: 5px;
    border: 0;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    vertical-align: baseline;
    position: relative;
    top: -700px;
    left: 390px;
  }
  .link1 {
    text-decoration: underline;
  }
  .link2 {
    text-decoration: underline;
  }
  .one {
    font-family: 'Open Sans' sans-serif;
    font-size: 25px;
    background-color: #0090c5;
    font-weight: 800;
    position: relative;
    left: 550px;
    line-height: 2em;
    letter-spacing: 0.01em;
    top: -690px;
    position: relative;
    left: 370px;
    border-radius: 10px;
    width: 350px;
    height: 80px;
  }
  .data {
    color: #ffffff;
    position: relative;
    left: 48px;
    top: 8px;
  }
  .icon2 {
    background-color: white;
    border-radius: 100%;
    position: relative;
    top: 10px;
    left: 30px;
  }
  .data2 {
    position: relative;
    top: -280px;
    left: -8px;
    background-color: #0090c5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 21px;
    color: #ffffff;
    font-weight: 800;
    height: 65px;
    width: 145px;
    border: none;
    border-radius: 6px;
  }
  .icon3 {
    position: relative;
    top: -280px;
    left: 50px;
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    text-transform: none !important;
  }
`;
const Data = () => (
  <div>
    <Container>
      <div className="col-4 col-12-medium">
        <div id="sidebar">
          <section className="widget thumnails">
            <h3 className="title">Intresting Stuff</h3>
            <div className="grid">
              <div className="row-gtr-50">
                <div className="col-6">
                  <a className="img1" href="###">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                  </a>
                  <a className="img2" href="###">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                  </a>
                  <a href="###" className="img3">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                  </a>
                  <a href="###" className="img4">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                  </a>
                  <a href="###">
                    <icon className="icon3">
                      <i class="fas fa-file-alt"></i>
                    </icon>{' '}
                    <button className="data2">More </button>
                  </a>
                  <div>
                    <h2 className="title2">So what's this all about? </h2>
                    <p className="para1">
                      This is <strong>Verti</strong>, a free and fully
                      responsive HTML5 site template by{' '}
                      <a className="link2" classhref="http://html5up.net">
                        HTML5 UP
                      </a>
                      Verti is released under the <br />
                      <a className="link1" href="http://html5up.net/license">
                        Creative Commons Attribution license
                      </a>
                      , so feel free to use it for any personal or commercial
                      project you <br /> might have going on (just don't forget
                      to credit us for the design!)
                    </p>
                    <br />
                    <br />
                    <p className="para2">
                      Phasellus quam turpis, feugiat sit amet ornare in,
                      hendrerit in lectus. Praesent semper bibendum ipsum, et{' '}
                      <br />
                      tristique augue fringilla eu. Vivamus id risus vel dolor
                      auctor euismod quis eget mi. Etiam eu ante risus.
                      <br /> Aliquam erat volutpat. Aliquam luctus mattis lectus
                      sit amet phasellus quam turpis.
                    </p>

                    <ul>
                      <li className="one">
                        <a className="icon2">
                          <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                        <a className="data">Continue Reading </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  </div>
);

export default Data;
