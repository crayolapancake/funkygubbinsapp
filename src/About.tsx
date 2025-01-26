import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const About = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* todo image: api / fallback */}
        <View style={styles.image}></View>
        {/* todo get text from Etsy api */}
        <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget luctus sapien. Ut pharetra porta neque eu cursus. Morbi mauris eros, cursus sit amet arcu nec, lobortis lacinia nisi. Curabitur ultricies condimentum est, sed aliquet enim ornare vitae. Nullam bibendum tempor auctor. Ut vitae aliquam massa. Donec felis tellus, eleifend ac hendrerit et, efficitur imperdiet mi. Pellentesque euismod tellus id nulla semper commodo.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 24
  },
  image: {
    borderWidth: 1,
    borderColor: Colors.dark,
    height: 200,
    width: 200,
    alignSelf: 'center',
    margin: 24,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    width: '70%',
    alignSelf: 'center',
  },
  subtext: {
    fontSize: 18,
    textAlign: 'center',
    margin: 24,
  }
});

export default About