import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type ItemProps = {
  category: string
  description: string
  image: string
  id: number
  price: number
  title: string
};

const Shop = () => {
  const [shopData, setShopData] = useState<ItemProps[]>([])
  // todo filter, sort, product count, search

  useEffect(() => {
    // todo replace dummy API with Etsy API
    getShopData()
  }, []);

  async function getShopData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setShopData(json))
  }

  const ShopItem = ({ title, image }: ItemProps) => (
    <View style={styles.listing}>
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode='contain'
      />
      <Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>{title}</Text>
    </View>
  );


  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.topBar}>Search, Filter, Sort By, Product Count</Text>
      <ScrollView>
        {shopData.length > 0 && (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={shopData}
            renderItem={({ item }) => <ShopItem category={item?.category} description={item?.description} image={item?.image} id={item?.id} price={item?.price} title={item?.title} />}
            keyExtractor={item => item?.id.toString()}
            horizontal
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 12,
  },
  topBar: {
    marginVertical: 24,
  },
  flatlist: {
    flexDirection: 'column',
  },
  listing: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark,
    height: 150,
    width: 100,
    marginBottom: 12,
    marginHorizontal: 12,
    borderRadius: 6
  },
  image: {
    height: 100,
    width: '99%',
    padding: 2,
    backgroundColor: '#fff',
    borderBlockColor: Colors.dark,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  title: {
    fontSize: 8,
    textAlign: 'center',
    overflow: 'hidden',
    marginTop: 8
  },
  listContent: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  }

});

export default Shop