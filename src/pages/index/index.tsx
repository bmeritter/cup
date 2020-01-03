import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Gallery from './gallery/gallery';
import Products from '../../components/products/products';

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  };

  render () {
    return (
      <View className='index'>
        <Gallery></Gallery>
        <View className='product-container'>
          <View className='title'>
            <Text>精选单品</Text>
            <Text>查看全部</Text>
          </View>
          <Products></Products>
        </View>
      </View>
    )
  }
}
