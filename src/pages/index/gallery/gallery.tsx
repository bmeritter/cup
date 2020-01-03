import Taro, { Component } from '@tarojs/taro';
import { ScrollView, Text, View } from '@tarojs/components';
import './gallery.scss';

const galleries = [
  {
    id: 1,
    name: '商品1',
    price: 100,
  }, {
    id: 2,
    name: '商品2',
    price: 100,
  }, {
    id: 3,
    name: '商品3',
    price: 100,
  }
];

export default class Gallery extends Component {
  onScroll = () => {
    console.log('scroll')
  };

  render() {
    return (
      <View>
        <View className='title'>
          <Text>本期推荐</Text>
          <Text>1/{galleries.length}</Text>
        </View>
        <ScrollView
          className='gallery'
          scrollX
          scrollWithAnimation
          onScroll={this.onScroll}
        >
          {
            galleries.map(item => (<View key={item.id}>{item.name}</View>))
          }
        </ScrollView>
      </View>
    );
  }

}
