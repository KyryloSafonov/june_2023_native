import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NestedFirstTab = () => {
  const {goBack} = useNavigation<any>();

  return (
    <View>
      <Text>Nested tab</Text>
      <Button title={'Go back'} onPress={goBack} />
    </View>
  );
};

export default NestedFirstTab;
