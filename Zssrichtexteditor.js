
import React, { Component } from 'react';
import { View, StyleSheet, Keyboard
, TouchableWithoutFeedback, Text
, KeyboardAvoidingView } from 'react-native';
// import RichText from 'react-native-rich-text';
import RichTextToolbar from "react-native-zss-rich-text-editor" ;
import { WebView } from 'react-native-webview';

 export default class Zssrichtexteditor extends Component {


render() {
  return (
      <View>
<WebView source={{ uri: 'https://reactnative.dev/' }} />
  <RichTextToolbar
    getEditor={() => this.richtext}
/>
      </View>
 )
}
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  },
});
