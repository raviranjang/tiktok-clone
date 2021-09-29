import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native'
import styles from './styles'


const PostComments = ({ onHide, show, commentsData }) => {
    
    const [comments, setComments] = useState([
        {
            id: "1",
            username: "ravi.ranjan",
            userImage: "",
            msg: "great content dude"
        },
        {
            id: "2",
            username: "ravi.ranjan",
            userImage: "",
            msg: "great content dude"
        },
        {
            id: "3",
            username: "ravi.ranjan",
            userImage: "",
            msg: "great content dude"
        },
        {
            id: "4",
            username: "ravi.ranjan",
            userImage: "",
            msg: "great content dude"
        },
        {
            id: "5",
            username: "ravi.ranjan",
            userImage: "",
            msg: "great content dude"
        }
    ])

    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(!showModal)
        onHide()
    }

    
    const deviceHeight = Dimensions.get('window').height

    const renderOutsideTouchable = (onTouch) => {
        console.log(onTouch)
        const view = <View style={{flex: 1, width: '100%', backgroundColor: 'red', maxHeight: deviceHeight * 0.4}} />
        if(!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%', color: 'green'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    const renderTitle = () => {
        const title = "Demo"

        return (
            <View>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    margin: 15
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    const renderContent = () => {
        const data = comments

        return (
            <View>
                <FlatList 
                    style={{marginBottom: 20}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={renderSeperator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }

    const renderItem = ({item}) => {
        return (
            <View>
                <Text>{item.msg}</Text>
            </View>
        )
    }

    const renderSeperator = () => {
        return (
            <View style={{
                opacity: 0.1,
                backgroundColor: '#182E44',
                height: 1
            }}>
                
            </View>
        )
    }
    


    useEffect(() => {
        setShowModal(show)
    }, [show])

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}

                
                
                style={styles.modalViewParent}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}
            >
                
                <View style={{
                    flex: 1,
                    backgroundColor: '#0000AA',
                    justifyContent: 'flex-end'
                }}>
                    {renderOutsideTouchable(show)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.6
                    }}>
                        {renderTitle}
                        {renderContent}
                    </View>

                </View>


                {/* <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleClose}
                            
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View> */}
            </Modal>
        </View>
    )
}


export default PostComments