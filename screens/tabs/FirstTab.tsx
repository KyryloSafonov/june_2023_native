import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FIRST_TAB_SCREENS} from '../tabs/Tabs.tsx';

const FirstTab = () => {
  const {navigate} = useNavigation<any>();

  return (
    <View>
      <Text>First tab</Text>
      <Button
        title="Go to nested screen"
        onPress={() => navigate(FIRST_TAB_SCREENS.SECOND_SCREEN)}
      />
    </View>
  );
};

export default FirstTab;
