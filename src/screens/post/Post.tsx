import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import styled from 'styled-components/native';

import { PostInfo } from '~/components/PostInfo';
import { ProfileInfo } from '~/components/ProfileInfo';
import { StatusIndicator } from '~/components/StatusIndicator';
import { RootStackParams } from '~/navigation/root-stack/types';
import { RouteNames } from '~/navigation/route-names';
import { useGetPostWithAuthorQuery } from '~/services/redux/api/postsApi';
import { SCREEN_PADDING } from '~/styles/consts';

type Props = NativeStackScreenProps<RootStackParams, RouteNames.Post>;

const ScrollViewStyled = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    padding: SCREEN_PADDING,
  },
}))``;

export const Post: FC<Props> = ({ route }) => {
  const { isLoading, data: post, isError } = useGetPostWithAuthorQuery(route.params.id);

  if (isLoading) return <StatusIndicator type="loading" />;
  if (isError || !post) return <StatusIndicator type="error" />;

  return (
    <ScrollViewStyled>
      <ProfileInfo name={post.user.name} marginBottom={15} />

      <PostInfo isFullView body={post.body} title={post.title} />
    </ScrollViewStyled>
  );
};
