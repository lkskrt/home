import { Icon } from 'antd';
import { css } from '@emotion/core';
import React from 'react';
import TweetEmbed from 'react-tweet-embed';

export const PresentationTweet: React.FC<{ id: string }> = ({ id }) => (
  <div
    css={css`
      zoom: 1.5;
      min-height: 200px;
    `}
  >
    <TweetEmbed
      id={id}
      placeholder={
        <Icon
          type="loading"
          css={css`
            font-size: 100px;
          `}
        />
      }
    />
  </div>
);
