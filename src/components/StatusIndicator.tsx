import React, { FC } from 'react';
import styled from 'styled-components/native';

import { Title } from '~/styles/typography';

const IndicatorWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StatusIndicator: FC<{ type: 'loading' | 'error' | 'empty' }> = ({ type }) => (
  <IndicatorWrapper>
    {type === 'loading' && <Title>Loading...</Title>}
    {type === 'error' && <Title>Oops, Something went wrong :(</Title>}
    {type === 'empty' && <Title>No items</Title>}
  </IndicatorWrapper>
);
