import Taro, { Component } from '@tarojs/taro'
import { OpenData, View } from "@tarojs/components";
import './index.scss';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <View className='header'>
          <OpenData className='avatar' type='userAvatarUrl'/>
          <OpenData type="userNickName"/>
        </View>
      </View>
    );
  }

}
