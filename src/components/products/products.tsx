import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './products.scss';

const products = [
  {id: 1, name: 'product 1', description: 'product 1', price: 50},
  {id: 2, name: 'product 2', description: 'product 2', price: 50},
  {id: 3, name: 'product 3', description: 'product 3', price: 50},
  {id: 4, name: 'product 4', description: 'product 4', price: 50},
  {id: 5, name: 'product 5', description: 'product 5', price: 50},
  {id: 6, name: 'product 6', description: 'product 6', price: 50},
  {id: 7, name: 'product 7', description: 'product 7', price: 50},
];

export default class Products extends Component {
  render() {
    return (
      <View className='products'>
        {
          products.map(product => (
            <View key={product.id} className='product'>
              <View className='img'></View>
              <Text>{product.name}</Text>
              <Text>{product.description}</Text>
              <Text>￥{product.price}</Text>
            </View>)
          )
        }
      </View>
    );
  }

}
