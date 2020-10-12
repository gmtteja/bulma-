import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon1} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon2} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon3} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon4} from '@fortawesome/fontawesome-svg-core';


const Container = styled.div`
.grid-container {
  display: grid;
  grid-template-rows: 400px 400px 400px 400px;
  grid-template-columns: 300px 300px 300px 300px;
  margin:-50px;
  background-color: #f7f7f7;

width:250vw;
height:15vw;

  padding: 10px;
}
.grid-container > div {
  background-color: #f7f7f7;
  text-align: center;
  padding: 20px 0px;
  /* font-size: px; */
}
.title1{
 color:#444444;
 font-family:'Open-Sans' sans-serif;
 font-size:16px;
}
.title2{
 color:#444444;
 font-family: 'Open Sans', sans-serif;
 font-size:16px;
}
.title3{
 color:#444444;
 font-family:'Open-Sans' sans-serif;
 font-size:12px;
}
.title4{
 color:#444444;
 font-family:'Open-Sans' sans-serif;
 font-size:16px;
}
li>a{
  text-decoration:underline;
  color:#444444;
  font-family:'Open-Sans' sans-serif;
 font-size:16px;
}
.grid-container1{
  display:grid;
grid-template-columns:80px 20px 50px 30px 50px;
line-height:10px;
font-size:21px;

cursor: pointer;
}

.para{
  font-size:16px;
}
`;
const Footer = ()=>(
  <div  >
    <Container >
    <footer className="footer">
    <div className="grid-container">
      <div>
      <div className="title1"><h3>Random Stuff</h3></div>
      <ul>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
</ul>
      </div>
<div>
<div className="title1"><h3>Random Stuff</h3></div>
<ul>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
</ul>
</div>
<div>
<div className="title3"><h3>Random Stuff</h3></div>
<ul>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
  <li><a>Link1</a></li>
</ul>
</div>
<div>
<div className="title4"><h3>Contact Us</h3></div>
<ul>
  <Container className="grid-container1">
  <li><a><i className="fab fa-twitter"></i></a></li>
  <li><a><i class="fab fa-facebook-f"></i></a></li>
  <li><a><i class="fab fa-instagram"></i></a></li>
  <li><a><i class="fa fa-dribbble"></i></a></li>
<li><a><i class="fab fa-pinterest"></i></a></li>

</Container>


</ul>
<p className="para">
1234 Fictional Road<br/>
Nashville, TN 00000<br/>
(800)-555-0000<br/>
</p>
</div>







</div>

</footer>
    </Container>
  </div>

)
export default Footer;



