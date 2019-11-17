import React from 'react';
import { Link } from 'gatsby';
import { Button, Avatar, Row, Col } from 'antd';

import { Image } from '../components/Image';
import SEO from '../components/seo';
import { Layout } from '../components/Layout';
import { css } from '@emotion/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h1>Hi People!</h1>

      <Avatar
        src="https://s.gravatar.com/avatar/54fdb25d88379b2759ca472224071f8b?s=200"
        size={200}
        css={css`margin-bottom: 1rem`}
      />

      <p>Welcome to my new Gatsby site.</p>
      
      <p>The only purpose of this is currently for me to try out creating some presentations using the awesome <a href="https://github.com/jxnblk/mdx-deck">mdx-deck</a> together with <a href="https://github.com/pomber/code-surfer">code-surfer</a>.</p>

      <p>
        <Button
          href="https://www.twitter.com/lkskrt"
          type="primary"
          shape="circle"
          icon="twitter"
          size="large"
          css={css`margin-right: 0.5em`}
        />

        <Button
          href="https://www.github.com/lkskrt"
          type="primary"
          shape="circle"
          icon="github"
          size="large"
        />
      </p>
    </div>
  </Layout>
);

export default IndexPage;
