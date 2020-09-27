// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Container  = styled.div`

h1{
  /* font-size:55px; */
  background: #ff4486;
    color: #fff;
    border-radius: 6px;
    font-family: 'Oleo Script', serif;
    font-weight: 400;
    padding:5px;
    font-size: 3.25em;
    letter-spacing: 0.05em;
    display: inline-block;
    vertical-align: middle;
    height:80px;
    width:140px;
}
 span{
  font-weight: 800;
  line-height: 4.5em;
  letter-spacing: 0.025em;
  font-size: 0.9em;
  vertical-align: middle;
  margin: 0 0 0 1.25em;
  color:#696969;
 }
 
a1{
  display:inline-block;
  vertical-align:middle;
  letter-spacing: 0.05em;
  line-height: 2.1em;
  font-weight: 800;
  color:#ffffff;
  margin: 0 0 0 10em;
  background-color:#444;
  height:35px;
  width:110px;
  border-radius:6px;
  text-align:center;
  position:relative;
  top:15px;
  cursor:pointer;
}

.dropbtn {
  display:inline-block;
  vertical-align:middle;
  background-color: #444;
  height:50px;
  width:130px;
  color: white;
  border-radius:6px;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.05em;
  line-height: 0.1em;
  font-weight: 800;
  text-align:center;
  position:relative;
  top:15px;
  left:100px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

 
a2{
  display:inline-block;
  vertical-align:middle;
  letter-spacing: 0.05em;
  line-height: 2.1em;
  font-weight: 800;
  color:#ffffff;
  margin: 0 0 0 10em;
  background-color:#444;
  height:45px;
  width:130px;
  border-radius:6px;
  text-align:center;
  position:relative;
  top:15px;
  cursor:pointer;
}

a3{
  display:inline-block;
  vertical-align:middle;
  letter-spacing: 0.05em;
  line-height: 2.1em;
  font-weight: 800;
  color:#ffffff;
  margin: 0 0 0 10em;
  background-color:#444;
  height:45px;
  width:140px;
  border-radius:6px;
  text-align:center;
  position:relative;
  top:15px;
  left:-120px;
  cursor:pointer;
}


/* a4{
  display:inline-block;
  vertical-align:middle;
  letter-spacing: 0.05em;
  line-height: 2.1em;
  font-weight: 800;
  color:#ffffff;
  margin: 0 0 0 10em;
  background-color:#444;
  height:35px;
  width:110px;
  border-radius:6px;
  text-align:center;
  position:relative;
  top:15px;
  left:-100px;
  cursor:pointer;
} */



`;
const Header = ({ siteTitle }) => (
  
  <div>
  <header>
   
     <Container>
    <div class="Container">
    <section class="section">
  
    <nav class="navbar" role="navigation" aria-label="main navigation">
<a><h1>verti</h1></a>    
<span>by HTML5UP</span>
<a  href="https://www.bbc.co.uk/"><a1>Welcome</a1> </a>


<div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>

   <a><a2>Left Sidebar</a2></a>
   <a><a3>Right Sidebar</a3></a>
   <a><a4>No Sidebar</a4></a>

  

 

  {/* <div id="navbarBasicExample" class="navbar-menu"></div>
  <div class="navbar-start"></div> */}






      

      

        
       
        
        
       
</nav>
</section>
</div>
</Container>

  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
