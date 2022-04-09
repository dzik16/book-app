import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ShareSocial from 'react-native-share';
import {IconBack, IconShare, IconLove} from '../../../../assets';
import {Color} from '../../../../config/utils/color';
import {useNavigation} from '@react-navigation/native';
import {notification} from '../../../../config/utils/Notification';

const header = props => {
  const [image, setImage] = useState('');

  const myShare = async () => {
    const shareOptions = {
      message: `Haii, ada buku baru nih *${props.data.title}*\nSilahkan Dibeli Stok Terbatas!!`,
    };

    try {
      const ShareResponse = await ShareSocial.open(shareOptions);
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  const clickNotification = () => {
    notification.configure();
    notification.createChannel('1');
    notification.sendNotification(
      '1',
      'Menyukai',
      `Kamu menyukai ${props.data.title}`,
    );
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={IconBack} style={styles.headerIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={clickNotification}>
          <Image source={IconLove} style={[styles.headerIcon, styles.love]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={myShare}>
          <Image source={IconShare} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.SECOND_MAIN_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  poster: {
    height: 180,
  },
  headerIcon: {
    height: 30,
    width: 30,
  },
  love: {
    marginRight: 20,
  },
});
