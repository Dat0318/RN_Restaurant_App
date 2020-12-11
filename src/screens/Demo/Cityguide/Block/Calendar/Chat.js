import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import { Images } from '@images';
import moment from 'moment';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import { Request } from './Request';

function Chat({ route }) {
  const [token, setToken] = useState('');
  // API

  const post = async (url, json) => {
    let header_data = {
      'Content-Type': 'application/json',
      'lang-code': 'vi',
    };
    let variableToken = {
      'x-token': token,
    };
    if (token.length !== 0) {
      header_data = { ...header_data, ...variableToken };
    }

    return new Promise(async (rs, rj) => {
      try {
        const instance = axios.create({
          baseURL: 'http://demo.apec-edu.net/api/',
          timeout: 120000,
          headers: { 'Content-Type': 'application/json', 'lang-code': 'vi' },
        });
        // console.log('instance: ', instance.post(url, json));
        rs(await instance.post(url, json));
        let header = axios.create({
          baseURL: 'http://demo.apec-edu.net/api/',
          timeout: 120000,
          headers: header_data,
        });
        // console.log('url ', header);
        // rs(await header.post(url, json));
      } catch (error) {
        Toast.show('general.error');
      }
    });
  };

  // END API
  // {username: 'huyendtt', password: '123456'}

  const refContainer = useRef();
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(0);
  const [listMessages, setListMessages] = useState([]);
  const [textChat, setTextChat] = useState('');
  // const { room_id, namePerson, avatar } = route.params;
  // const avatarChat =
  //   avatar !== null
  //     ? { uri: Config.base_url + avatar }
  //     : Images.ic_collection_1;

  useEffect(() => {
    init();
  }, []);

  const ItemMessage = ({ data }) => {
    return (
      <View style={[styles.chatDetailsItem]}>
        {data.sender_id == User.userInfo.id ? (
          <View style={[styles.chatDetailsContain]}>
            <View style={[styles.chatDetailsContent]}>
              <Text style={[styles.chatDetailsTime]}>
                {moment(data.updatedAt).format('hh:mm A')}
              </Text>
              <View style={[styles.chatDetailsMessage]}>
                <Text style={[styles.chatDetailsMessageText]}>
                  {data.message}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={[styles.chatDetailsContain]}>
            <View style={[styles.chatDetailsAvatar]}>
              <Image
                style={[styles.chatDetailsAvatarImage]}
                source={Images.ic_collection_1}
              />
            </View>
            <View
              style={[styles.chatDetailsContent, { alignItems: 'flex-start' }]}
            >
              <Text style={[styles.chatDetailsTime]}>
                {moment(data.updatedAt).format('h:mm A')}
              </Text>
              <View
                style={[
                  styles.chatDetailsMessage,
                  styles.chatDetailsMessagePartner,
                ]}
              >
                <Text
                  style={[styles.chatDetailsMessageText, { color: '#545a63' }]}
                >
                  {data.message}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  const onSendMessage = async () => {
    //   if (textChat) {
    //     let result = await general.Chat.sendMess(room_id, textChat);
    //     if (result.data.status === 1) {
    //       setTextChat('');
    //       setListMessages((oldData) => [result.data.data, ...oldData]);
    //       if (refContainer.current) {
    //         refContainer.current.scrollToIndex({
    //           index: 0,
    //           viewOffset: 0,
    //           viewPosition: 1,
    //           animated: true,
    //         });
    //       }
    //     }
    //   } else {
    //     Toast.show('Chưa nhập nội dung chat');
    //   }
  };

  const init = async () => {
    // listenSocket();
    await getToken();
    // await getData();
  };

  const getToken = async () => {
    let json = {
      username: 'admin',
      password: '123456',
    };
    console.log('post(auth/login, json): ', post('auth/login', json));
    let result = await post('auth/login', json);
    console.log('result: ', result);
    if (result.data.status === 1) {
      console.log('result.data: ', result.data);
    } else {
      Toast.show(result.data.message);
    }
    setIsLoadMore(false);
  };

  const getData = async () => {
    let result = await general.Chat.getListMessages(room_id, 0, 50);
    if (result.data.status === 1) {
      setListMessages(result.data.data.messages.reverse());
    } else {
      Toast.show(result.data.message);
    }
    setIsLoadMore(false);
  };

  const onLoadMore = () => {
    setIsLoadMore(true);
    setPage(page + 1);
  };

  // const listenSocket = () => {
  //   socket.listen('new_message', (data) => {
  //     if (data.sender_id !== User.userInfo.id) {
  //       console.log('data');
  //       setListMessages((oldData) => [data, ...oldData]);
  //     }
  //   });
  // };

  return (
    <View style={styles.content}>
      <View style={styles.content}>
        <View style={styles.scrollView}>
          <FlatList
            ref={refContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.chatDetailsList}
            data={listMessages}
            inverted
            automaticallyAdjustContentInsets={false}
            renderItem={({ item }) => <ItemMessage data={item} />}
            keyExtractor={(item, index) => index.toString()}
            // onEndReachedThreshold={0.5}
            // onEndReached={onLoadMore}
          />
          <View style={[styles.chatDetailsSendMessage]}>
            <TextInput
              style={[styles.chatDetailsInput]}
              placeholder="Nhập nội dung"
              numberOfLines={1}
              onChangeText={(text) => setTextChat(text)}
              value={textChat}
              onSubmitEditing={onSendMessage}
            />
            <TouchableOpacity
              style={[styles.chatDetailsButtonSend]}
              onPress={onSendMessage}
            >
              <Image
                style={[styles.chatDetailsSendImage]}
                source={Images.ic_sign_arrow_right}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Chat;
