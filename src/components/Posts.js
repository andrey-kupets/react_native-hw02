import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from 'react-native';
import {getPosts} from "../api/postAPI";
import Post from "./Post";

const Posts = (props) => {
    const {navigation} = props;
    console.log(props)

    const [ posts, setPosts ] = useState([]);

    const takeData = async () => {
        // const posts = await getPosts();
        setPosts([...await getPosts()]);
    }

    useEffect(() => {
        takeData();
    }, [])

    return <View>
              <FlatList
                  data={ posts }
                  renderItem={({item}) => <Post nav={navigation} item={item}/>}
                  keyExtractor={ item => '' + item.id }
              />
           </View>;
};
export default Posts;

const styles = StyleSheet.create({});
