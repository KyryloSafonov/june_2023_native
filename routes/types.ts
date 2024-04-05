import {Routes} from './index.ts';
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type UsersScreenParams = {[Routes.USERS]: undefined};
export type UserPostsScreenParams = {
  [Routes.USER_POSTS]: {userId: string; userName: string};
};

export type UserNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<UsersScreenParams, Routes.USERS>,
  NativeStackNavigationProp<UserPostsScreenParams, Routes.USER_POSTS>
>;

export type RouteParams<
  RouteName extends keyof UserPostsScreenParams,
  ScreenParams extends ParamListBase,
> = RouteProp<ScreenParams, RouteName>;
