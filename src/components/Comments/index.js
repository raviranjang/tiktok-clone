import React from 'react'
import { View, Text, TextInput, Modal, TouchableWithoutFeedback, Dimensions, FlatList, StyleSheet, Image } from 'react-native'
import styles from './styles'

const deviceHeight = Dimensions.get('window').height


export class PostComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            commentText: null
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}} />
        if(!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    
    renderTitle = () => {
        const {title} = this.props

        return (
            <Text style={{
                color: '#182E44',
                fontSize: 20,
                fontWeight: '500',
                margin: 15
            }}>
                {title}
            </Text>
        )
    }


    renderContent = () => {
        const {data} = this.props
        return (
            <View style={{
                marginBottom: 40
            }}>
                <FlatList 
                    style={{marginBottom: 20}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }} 
                />
            </View>
        )
    }


    renderItem = ({item}) => {
        return (
            <View 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10
                }}
            >
                <View 
                    style={{
                        marginRight: 10
                    }}
                >
                    <Image
                        style={{ 
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: '#fff' 
                        }}
                        source={{uri: item.userImage}}
                    />
                </View>
                <View>
                    <Text>{item.username}</Text>
                    <Text>{item.msg}</Text>
                </View>
            </View>
        )
    }


    renderSeparator = () => (
        <View style={{
                opacity: 0.1,
                backgroundColor: '#182E44',
                height: 1
            }}
        ></View>
    )


    renderChatBox = () => {
        return (
            <View style={{ 
                width: '100%',
                height: 50,
                backgroundColor: '#EE5407',
                // justifyContent: 'center',
                // alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                // flex: 1
                zIndex: 999
             }}>
                <TextInput
                    // style={{ 
                    //     width: '100%',
                    //     height: 50,
                    //     backgroundColor: '#EE5407',
                    //     justifyContent: 'center',
                    //     alignItems: 'center',
                    //     position: 'absolute',
                    //     bottom: 0,
                    //     // flex: 1
                    //  }}
                    // style={styles.commentBox}
                    onChangeText={(text) => this.setState({commentText: text})}
                    value={this.commentText}
                    placeholder="Write a message"
                    keyboardType="default"
                    // keyboardType="numeric"
                />
            </View>
        )
    }


    render() {
        let { show } = this.state
        const {onTouchOutside, title} = this.props

        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.7,
                        height: deviceHeight * 0.7
                    }}>
                        <View style={{
                            marginBottom: 50
                        }}>
                            {this.renderTitle()}
                            {this.renderContent()}
                            {this.renderChatBox()}
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}