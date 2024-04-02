/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlightComponent,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (): React.JSX.Element => {
  const [users, setUsers] = useState<any[]>();
  const [posts, setPosts] = useState<any[]>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  const handleGetPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  };

  return (
    <SafeAreaView>
      {users && (
        <ScrollView style={styles.container}>
          {users.map(item => (
            <View>
              <Text key={item.id}>
                {item.id} --- {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
      <View>
        <TouchableOpacity style={styles.button} onLongPress={handleGetPosts}>
          <Text>Get Posts</Text>
        </TouchableOpacity>
      </View>
      {posts && (
        <FlatList
          style={styles.flatList}
          data={posts}
          renderItem={({item}) => (
            <View>
              <Text key={item.id}>
                {item.id} --- {item.title}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 100,
    width: '100%',
  },
  text: {
    color: 'red',
    fontSize: 26,
    height: 30,
  },
  flatList: {
    height: 400,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default App;
