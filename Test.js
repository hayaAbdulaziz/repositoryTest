import React, {Component} from 'react';
import { StyleSheet, Text, View ,ScrollView , TextInput ,Image , TouchableWithoutFeedback ,KeyboardAvoidingView  , Keyboard} from 'react-native';
import Textimg from "./assets/Textimg.png";
import  Block  from "./assets/Block.png";
import  Rectangle8 from "./assets/Rectangle8.png";
import  CNRichTextEditor , { CNToolbar, getInitialObject , getDefaultStyles } from "react-native-cn-richtext-editor";
const defaultStyles = getDefaultStyles();
 export default class Test extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedTag : 'body',
            selectedStyles : [],
            value: [getInitialObject()]
        };

        this.editor = null;
    }

    onStyleKeyPress = (toolType) => {
        this.editor.applyToolbar(toolType);
    }

    onSelectedTagChanged = (tag) => {
        this.setState({
            selectedTag: tag
        })
    }

    onSelectedStyleChanged = (styles) => { 
        this.setState({
            selectedStyles: styles,
        })
    }

    onValueChanged = (value) => {
        this.setState({
            value: value
        });
    }
    render() {

return(
<View style={styles.container}>
<KeyboardAvoidingView 
            behavior="padding" 
            enabled
            keyboardVerticalOffset={0}
            style={styles.textinput}
            >
 <Image style={styles.Textimg} source={Textimg}></Image>
 <Image  style={styles.Block} source={Block}></Image>
 <Image style={styles.Rectangle8} source={Rectangle8}></Image>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
                    <View style={styles.main}>
                        <CNRichTextEditor                   
                            ref={input => this.editor = input}
                            onSelectedTagChanged={this.onSelectedTagChanged}
                            onSelectedStyleChanged={this.onSelectedStyleChanged}
                            value={this.state.value}
                            // style={{ backgroundColor : '#fff'}}
                            styleList={defaultStyles}
                            onValueChanged={this.onValueChanged}
                        />                        
                    </View>
                </TouchableWithoutFeedback>

                <View style={{
                    minHeight: 35
                }}>

                    <CNToolbar
                                style={{
                                    height: 35,
                                }}
                                iconSetContainerStyle={{
                                    flexGrow: 1,
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                }}
                                size={30}
                                iconSet={[
                                    {
                                        type: 'tool',
                                        iconArray: [{
                                            toolTypeText: 'image',
                                            iconComponent:
                                                <Text style={styles.toolbarButton}>
                                                image
                                                </Text>
                                        }]
                                    },
                                    {
                                        type: 'tool',
                                        iconArray: [{
                                            toolTypeText: 'bold',
                                            buttonTypes: 'style',
                                            iconComponent:
                                                <Text style={styles.toolbarButton}>
                                                bold
                                                </Text>
                                        }]
                                    },
                                    {
                                        type: 'seperator'
                                    },
                                    {
                                        type: 'tool',
                                        iconArray: [
                                            {
                                                toolTypeText: 'body',
                                                buttonTypes: 'tag',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    body
                                                    </Text>
                                            },
                                        ]
                                    },
                                    {
                                        type: 'tool',
                                        iconArray: [
                                            {
                                                toolTypeText: 'ul',
                                                buttonTypes: 'tag',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    ul
                                                    </Text>
                                            }
                                        ]
                                    },
                                    {
                                        type: 'tool',
                                        iconArray: [
                                            {
                                                toolTypeText: 'ol',
                                                buttonTypes: 'tag',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    ol
                                                    </Text>
                                            }
                                        ]
                                    },
                                ]}
                                selectedTag={this.state.selectedTag}
                                selectedStyles={this.state.selectedStyles}
                                onStyleKeyPress={this.onStyleKeyPress}
                            />
                </View>
        </KeyboardAvoidingView>
        
</View>
);
}

 }
const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
        position: "absolute", 
        width :336 ,
        height :238 ,
        left : 25 ,
        right :25 ,
        top: 381 ,
        bottom: 286 ,
        borderRadius: 5, 
        borderColor : " #E5E5E5",
       backgroundColor:'#F2F3FD',
       borderColor : '#D0D3E8',
       borderWidth : 0.5 ,
       borderStyle : "solid",

    },
    Textimg:{
        width: 150 ,
        height: 11.25 ,
        top:20 ,
        bottom:499.75 ,
        left : 15 ,


    },
    Block :{
        width: 150 ,
        height: 10.5 ,
        top:25 ,
        bottom:468.75 ,
        left : 15 ,
      
 
    } ,
    Rectangle8:{
        width: 336 ,
        top: 30 ,
        bottom:453 ,
        left : 0 ,
        // right :20 ,
    },
    main: {
        flex: 1,
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 1,
        alignItems: 'stretch',
    },
    toolbarButton: {
        fontSize: 20,
        width: 28,
        height: 28,
        textAlign: 'center',
    },
    italicButton: {
        fontStyle: 'italic',
    },
    boldButton: {
        fontWeight: 'bold',
    },
    underlineButton: {
        textDecorationLine: 'underline',
    },
    lineThroughButton: {
        textDecorationLine: 'line-through',
    },
  });