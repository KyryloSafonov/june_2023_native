import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes';

const Home: FC = () => {
  const {navigate} = useNavigation<any>();

  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
      <Button title={'Go to Users'} onPress={() => navigate(Routes.USERS)} />
      <Button title={'Go to Tabs'} onPress={() => navigate(Routes.TABS)} />
    </View>
  );
};

export default Home;
