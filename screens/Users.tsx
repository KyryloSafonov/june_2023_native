import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes';
import {UserNavigationProps} from '../routes/types.ts';

const Users: FC = () => {
  const [users, setUsers] = useState<any[]>();

  const {navigate} = useNavigation<UserNavigationProps>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  const handleNavigate = (userId: string, userName: string) =>
    navigate(Routes.USER_POSTS, {userId, userName});

  return (
    <View>
      <Text>Users</Text>
      <View>
        <FlatList
          style={{
            width: '100%',
          }}
          data={users}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                width: '100%',
                backgroundColor: 'red',
                opacity: 0.7,
              }}>
              <TouchableOpacity
                onPress={() => handleNavigate(item.id, item.name)}>
                <Text key={item.id}>
                  {item.id} --- {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Users;
