import Taro, { Component } from '@tarojs/taro'
import { OpenData, View } from "@tarojs/components";

export default class Profile extends Component {
  render() {
    return (
      <View>
        <OpenData type='userAvatarUrl'/>
        <OpenData type="userNickName"/>
      </View>
    );
  }

}
