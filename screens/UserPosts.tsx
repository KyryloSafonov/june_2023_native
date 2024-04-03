import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const UserPosts: FC = () => {
  const [posts, setPosts] = useState<any[]>();

  const {params} = useRoute<any>();

  const {userId, userName} = params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(json => setPosts(json));
  }, [userId]);

  return (
    <View>
      <Text>{userName} Posts</Text>
      {posts && (
        <FlatList
          style={{
            width: '100%',
            height: 500,
          }}
          data={posts}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                width: '100%',
                backgroundColor: 'red',
                opacity: 0.7,
              }}>
              <Text key={item.id}>
                {item.id} --- {item.title}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default UserPosts;
