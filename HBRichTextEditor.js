import React, {Component} from 'react' ;
import { View, StyleSheet, Keyboard
    , TouchableWithoutFeedback, Text
    , KeyboardAvoidingView } from 'react-native';
    var HBRichTextEditor = require('react-native-richtext-editor');
    var HBToolbar = require('react-native-richtext-editor/HBToolbar');
    export default class Editor extends Component {
        render(){
            return (
                <View>
             <HBRichTextEditor
                ref="myWebView"
                initialHTML={bodyForDisplay}/>
               <HBToolbar />
                </View>

            )
        }
    }