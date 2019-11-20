import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../../components/Layout';

interface IProps {
  decks: {
    id: string;
    slug: string;
    title: string;
  }[];
}

const Decks: React.FC<IProps> = ({ decks }) => (
  <Layout>
    <h1>Talks</h1>
    <ul>
      {decks.map(d => (
        <li key={d.id}>
          <Link to={d.slug}>{d.title || d.slug}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Decks;
