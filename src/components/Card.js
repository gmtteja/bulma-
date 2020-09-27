import React from "react";
import styled from "styled-components";
import Button from "../components/Button";









const Container = styled.div`
h1{
 font-size:58px;
 font-family: Open Sans, sans-serif;

}

p{
  font-size:44px;
  color:#696969;
  font-family: Open Sans, sans-serif;
  line-height: 1.35em;
}

button{
  position:relative;
  top:50px;
  left:120px;
}
button .b2{
  position:relative;
  top:-50px;
  left:120px;
}
`;



const Card =()=>(
<div class="card">
<div class="card-content">
  <div>
    <Container>
<h1 id="para ">HI THIS IS VERTI</h1>
  


<p id="data ">It's a free responsive site <br/> template by HTML5 UP</p>

<Button id="b1"title="Ok Let's go" height="100px" width="40%" bgColor="#0090c5"/>
  
<Button className="b2" title="More info" height="100px" width="40%" />


        
    

  </Container>
  </div>

</div>
</div>
)

export default Card;