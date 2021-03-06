import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <div>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <button>
        <Link to="/">Go back to the homepage</Link>
      </button>
    </div>
  </Layout>
);

export default SecondPage;
