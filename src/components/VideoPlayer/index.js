// import React, {Component} from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import Video from 'react-native-video';

// import InViewPort from '../InViewPort';

// export default class VideoPlayer extends React.Component {

//     onPlayPausePress = () => {
//         setPaused(!paused);
//     }

//   pauseVideo = () => {
      
//     // if(this.currentvideo) {
//     //   this.currentvideo.pauseAsync();
//         this.paused = true
//     // }
//   }

//   playVideo = () => {
//     // if(this.currentvideo) {
//     //   this.currentvideo.playAsync();
//         this.paused = false
//     // }
//   }

//   handlePlaying = (isVisible) => {
//     isVisible ? this.playVideo() : this.pauseVideo();
//   }
  
//   render() {
//       return (
//         // <View style={styles.container}>
//          <InViewPort onChange={this.handlePlaying}>
//           <Video
//             // ref={ref => {this.currentvideo = ref}}
//             source={{ uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4' }}
//             rate={1.0}
//             volume={1.0}
//             isMuted={false}
//             resizeMode="cover"
//             shouldPlay
//             style={styles.video}
//             onError={(e) => console.log(e)}
            
//             repeat={true}
//             paused={this.paused}
            
//             // style={{ width: 300, height: 300 }}
//           />
//           </InViewPort>
//         // </View>
//       )
//   }  
// }

// const styles = StyleSheet.create({
//     videPlayButton: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         zIndex: 100,
//       },
//   video: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     height: Dimensions.get('window').height - 70,
//     width: Dimensions.get('window').width
//   }
// });