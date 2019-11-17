import React from 'react';
import { Layout as AntLayout, Menu, Row, Col } from 'antd';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

interface IProps {
  children: React.ReactNode;
}

const navigation = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/talks',
    text: 'Talks',
  },
  {
    path: '/blog',
    text: 'Blog',
  },
];

const getSelectedKeys = (currentPath: string) => {
  const splitPath = currentPath.split('/');
  if (splitPath.length > 0) {
    return [`/${splitPath[1]}`];
  }

  return [];
};

const Container = ({ children, flex = false }) => (
  <Row type="flex" justify="center">
    <Col
      css={css`
        max-width: 1000px;
        flex: 1;
        padding-left: 10px;
        padding-right: 10px;
        ${flex && 'display: flex;'}
      `}
    >
      {children}
    </Col>
  </Row>
);

export const Layout: React.FC<IProps> = ({ children }) => (
  <AntLayout
    css={css`
      min-height: 100vh;
    `}
  >
    <AntLayout.Header
      css={css`
        margin-bottom: 1rem;
        padding: 0;
      `}
    >
      <Container flex>
      <div
        css={css`
          color: white;
          margin-right: 1.5rem;
        `}
      >
        lkskrt
      </div>
      <Location>
        {({ location }) => (
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={getSelectedKeys(location.pathname)}
            css={css`
              line-height: 64px;
            `}
          >
            {navigation.map(item => (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.text}</Link>
              </Menu.Item>
            ))}
          </Menu>
        )}
      </Location>
      </Container>
    </AntLayout.Header>

    <AntLayout.Content>
      <Container>{children}</Container>
    </AntLayout.Content>

    {/* <AntLayout.Footer>
      <Container>Footer</Container>
    </AntLayout.Footer> */}
  </AntLayout>
);
