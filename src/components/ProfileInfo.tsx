import React, { FC } from 'react';
import styled from 'styled-components/native';

import { Colors } from '~/styles/colors';
import { Paragraph } from '~/styles/typography';

type Props = {
  name: string;
  marginBottom?: number;
};

const ProfileInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ marginBottom = 0 }: Pick<Props, 'marginBottom'>) => `${marginBottom}px`};
`;

const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${Colors.Blue};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const AvatarText = styled(Paragraph)`
  color: ${Colors.White};
`;

export const ProfileInfo: FC<Props> = ({ name, marginBottom }) => {
  return (
    <ProfileInfoWrapper marginBottom={marginBottom}>
      <Avatar>
        <AvatarText>{name[0]}</AvatarText>
      </Avatar>

      <Paragraph>{name}</Paragraph>
    </ProfileInfoWrapper>
  );
};
