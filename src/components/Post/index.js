import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';
import {Storage} from 'aws-amplify';

import Video from 'react-native-video';
import TextTicker from 'react-native-text-ticker' 
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {PostComments} from '../Comments';
// import InViewPort from '../InViewPort';
// import VideoPlayer from '../VideoPlayer'
// import Swiper from '../Swiper'

const popuplist = [
  {
      id: "1",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "great content ..well done"
  },
  {
      id: "2",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "so cool, nice"
  },
  {
      id: "3",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "wow...such an amazing video"
  },
  {
      id: "4",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "keep it up bro"
  },
  {
      id: "5",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "great content dude"
  },
  {
      id: "6",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "great content ..well done"
  },
  {
      id: "7",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "so cool, nice"
  },
  {
      id: "8",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "wow...such an amazing video"
  },
  {
      id: "9",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "keep it up bro"
  },
  {
      id: "10",
      username: "ravi.ranjan",
      userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
      msg: "great content dude"
  },
  {
    id: "11",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "great content ..well done"
  },
  {
    id: "12",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "so cool, nice"
  },
  {
    id: "13",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "wow...such an amazing video"
  },
  {
    id: "14",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "keep it up bro"
  },
  {
    id: "15",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "great content dude"
  },
  {
    id: "16",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "great content ..well done"
  },
  {
    id: "17",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "so cool, nice"
  },
  {
    id: "18",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "wow...such an amazing video"
  },
  {
    id: "19",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "keep it up bro"
  },
  { 
    id: "20",
    username: "ravi.ranjan",
    userImage: "https://media-exp3.licdn.com/dms/image/C5103AQE_y6dGJIh2Ug/profile-displayphoto-shrink_800_800/0/1585142529618?e=1629936000&v=beta&t=4AFcAxph2cdF4_dAdLBurDbvQCIyMbUHmMmTf-QDYlU",
    msg: "great content dude 20 - last"
  }
]

const Post = ({ post, currentIndex, currentVisibleIndex }) => {
  const [postInfo, setPostInfo] = useState(post);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');
  

  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }



  const [paused, setPaused] = useState(true);

  const onPlayPausePress = () => {
    // setForceStop(true)
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPostInfo({
      ...postInfo,
      likes: (postInfo.likes ? postInfo.likes : 0) + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const getVideoUri = async () => {
    if (postInfo.videoUri.startsWith('http')) {
      setVideoUri(postInfo.videoUri);
      return;
    }
    setVideoUri(await Storage.get(postInfo.videoUri));
  };


  useEffect(() => {
    getVideoUri();
  },[]);

  useEffect(() => {
    // let flag = true
    // console.log("state updated", currentIndex, currentVisibleIndex)
    if(currentIndex == currentVisibleIndex) {
      setPaused(false)
    } else {
      setPaused(true)
    }
    
  }, [currentIndex, currentVisibleIndex])

  

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          {/* <Swiper
            showsPagination={false}
            onIndexChanged={onChangeImage}
            index={0}
          >

          </Swiper> */}
          {/* <InViewPort onChange={handlePlaying}> */}
            <Video
              // ref={ref => {this.currentvideo = ref}}
              source={{ uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              style={styles.video}
              onError={(e) => console.log(e)}
              
              repeat={true}
              paused={paused}
            />
            {/* </InViewPort> */}
          {/* <InViewport onChange={handlePlaying}> */}
            {/* <Video
              source={{uri: videoUri}}
              style={styles.video}
              onError={(e) => console.log(e)}
              resizeMode={'cover'}
              repeat={true}
              paused={paused}
            /> */}
            
          {/* </InViewport> */}
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{uri: postInfo.user.imageUri}}
              />

              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                <Text style={styles.statsLabel}>{postInfo.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer} onPress={onShowPopup}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{postInfo.comments}</Text>
              </TouchableOpacity>
              {/* <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{postInfo.comments}</Text>
              </View> */}

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>{postInfo.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{postInfo.user.username}</Text>
                <Text style={styles.description}>{postInfo.description}</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <TextTicker
                    style={styles.songName}
                    duration={6000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                  >
                    {postInfo.song.name + '                                                                                                 '}
                  </TextTicker>
                        {/* <Text style={styles.songName}>{postInfo.song.name}</Text> */}
                      
                    {/* <Text style={styles.songName}>{postInfo.song.name}</Text>  */}
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{uri: postInfo.song.imageUri}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* <Dialog show={commentModalShow} commentsData={commentsData} onHide={() => {
        setCommentModalShow(false)
      }} /> */}

      {/* <PostComments 
        show={commentModalShow} 
        // commentsData={commentsData} 
        onHide={() => {
          setCommentModalShow(false)
        }}
      /> */}

      <PostComments 
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          title="Demo Popup"
          data={popuplist}
      />

      
    </View>
  );
};

export default Post;