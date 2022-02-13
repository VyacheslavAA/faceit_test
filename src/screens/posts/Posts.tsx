import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { PostInfo } from '~/components/PostInfo';
import { ProfileInfo } from '~/components/ProfileInfo';
import { StatusIndicator } from '~/components/StatusIndicator';
import { RootStackParams } from '~/navigation/root-stack/types';
import { RouteNames } from '~/navigation/route-names';
import { Post, resetPostsCache, useGetPostsWithAuthorQuery } from '~/services/redux/api/postsApi';
import { Colors } from '~/styles/colors';
import { SCREEN_PADDING } from '~/styles/consts';

type Props = NativeStackScreenProps<RootStackParams, RouteNames.Posts>;

const FlatListStyled = styled(FlatList as new () => FlatList<Post>).attrs<{
  paddingBottom: number;
  isEmpty: boolean;
}>(({ paddingBottom, isEmpty }) => ({
  contentContainerStyle: {
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom,
    flex: isEmpty ? 1 : 0,
  },
}))`
  flex: 1;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.LightGrey};
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin: 12px 0;
`;

export const Posts: FC<Props> = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch();

  const postStack = useRef<Post[]>([]);
  const [page, setPage] = useState(1);
  const { data: posts, isError, isSuccess, isFetching } = useGetPostsWithAuthorQuery(page);

  const allPosts = useMemo(() => {
    if (!posts) return postStack.current;

    const newPostStack = [...postStack.current, ...posts];

    postStack.current = newPostStack;

    return newPostStack;
  }, [posts]);

  const renderItem = ({ item }: ListRenderItemInfo<Post>) => (
    <TouchableOpacity onPress={() => navigation.navigate(RouteNames.Post, { id: item.id })}>
      <ProfileInfo marginBottom={10} name={item.user.name} />

      <PostInfo title={item.title} body={item.body} />
    </TouchableOpacity>
  );

  const renderEmptyComponent = useCallback(
    () => (
      <>
        {isSuccess && <StatusIndicator type="empty" />}
        {isError && <StatusIndicator type="error" />}
        {isFetching && <StatusIndicator type="loading" />}
      </>
    ),
    [isError, isFetching, isSuccess],
  );

  const onEndReached = useCallback(() => {
    if (isFetching) return;

    setPage(prevPage => prevPage + 1);
  }, [isFetching]);

  const refreshPosts = useCallback(() => {
    dispatch(resetPostsCache());
    postStack.current = [];
    setPage(1);
  }, [dispatch]);

  return (
    <FlatListStyled
      // @ts-ignore
      data={allPosts}
      isEmpty={!allPosts.length}
      paddingBottom={SCREEN_PADDING + bottom}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={renderEmptyComponent}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
      onRefresh={refreshPosts}
      refreshing={!allPosts.length && isFetching}
    />
  );
};

const keyExtractor = (item: Post) => `${item.id}`;
