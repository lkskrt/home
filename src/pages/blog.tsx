import React from 'react';

import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';

const Blog: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>

    <p>As if I would have time to write a blog 😂</p>
  </Layout>
);

export default Blog;
