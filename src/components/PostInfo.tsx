import React, { FC } from 'react';
import styled from 'styled-components/native';

import { Colors } from '~/styles/colors';
import { Paragraph, Title } from '~/styles/typography';

type Props = {
  title: string;
  body: string;
  isFullView?: boolean;
};

type FullViewProp = Pick<Props, 'isFullView'>;

const PostImage = styled.View<FullViewProp>`
  width: ${({ isFullView }) => (isFullView ? '200px' : '80px')};
  height: ${({ isFullView }) => (isFullView ? '200px' : '80px')};
  margin-bottom: ${({ isFullView }) => (isFullView ? '15px' : '0px')};
  background-color: ${Colors.Blue};
  margin-top: auto;
`;

const PostWrapper = styled.View<FullViewProp>`
  flex-direction: ${({ isFullView }) => (isFullView ? 'column-reverse' : 'row')};
`;

const PostTextWrapper = styled.View`
  flex: 1;
  padding-right: 5px;
`;

const PostTitle = styled(Title)`
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const PostInfo: FC<Props> = ({ title, body, isFullView }) => {
  return (
    <PostWrapper isFullView={isFullView}>
      <PostTextWrapper>
        <PostTitle>{title}</PostTitle>
        <Paragraph numberOfLines={isFullView ? undefined : 5}>{body}</Paragraph>
      </PostTextWrapper>

      <PostImage isFullView={isFullView} />
    </PostWrapper>
  );
};
