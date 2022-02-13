import { RouteNames } from '~/navigation/route-names';

export type RootStackParams = {
  [RouteNames.Posts]: undefined;
  [RouteNames.Post]: { id: number };
};
