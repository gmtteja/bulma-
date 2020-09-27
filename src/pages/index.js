import React from 'react';
//import { Link } from "gatsby"

import Layout from '../components/layout';
//import Image from "../components/image"
//import SEO from "../components/seo"
import Card from '../components/Card';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

const IndexPage = () => (
  <Layout>
    <Card />
    <Card1 />
    <Card2 />
    <Card3 />
  </Layout>
);

export default IndexPage;
