import React, { useEffect, useState, useCallback } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from './../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
// import posts from '../../../data/posts'

import { listPosts } from '../../graphql/queries'



const Home = () => {

    const [posts, setPosts] = useState([])
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0)
    // const [viewedItems, setViewedItems] = useState([])

    const viewabilityConfigVal = { 
        viewAreaCoveragePercentThreshold: 90
    }


    const handleVieweableItemsChanged = useCallback(({ changed }) => {
        console.log("****currentvisibleidx", currentVisibleIndex)
        console.log("****changed", changed)
        if(currentVisibleIndex == changed[0].index) return
        setCurrentVisibleIndex(changed[0].index)
        // setViewedItems(oldViewedItems => {
        //   // We can have access to the current state without adding it
        //   //  to the useCallback dependencies
    
        //   let newViewedItems = null;
    
        //   changed.forEach(({ index, isViewable }) => {
        //     if (index != null && isViewable && !oldViewedItems.includes(index)) {
              
        //        if (newViewedItems == null) {
        //          newViewedItems = [...oldViewedItems];
        //        }
        //     //    newViewedItems.push(index);
        //        setCurrentVisibleIndex(index)
        //     }
        //   });
    
        //   // If the items didn't change, we return the old items so
        //   //  an unnecessary re-render is avoided.
        //   return newViewedItems == null ? oldViewedItems : newViewedItems;
        // });
    
        // Since it has no dependencies, this function is created only once
      }, []);
    

    // const onViewableItemsChanged = useCallback(({viewableItems, changed }) => {
    //     // if(viewableItems && viewableItems.length > 0) {
    //     //     setCurrentVisibleIndex(viewableItems[0].index)
    //     // }
    //     console.log('viewableItems', viewableItems)
    //     console.log('changed', changed)
    // }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listPosts))
                setPosts(response.data.listPosts.items)
            } catch(e) {
                console.error(e)
            }  
        }
        
        fetchPost();
    }, [])

    return (
        <View>
            <FlatList 
                data={posts} 
                renderItem={({item, index}) => <Post 
                    currentIndex={index} 
                    currentVisibleIndex={currentVisibleIndex}  
                    post={item}
                    key={item.id}/>} 
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 70}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                keyExtractor={item => item.id}
                onViewableItemsChanged={handleVieweableItemsChanged}
                viewabilityConfig={viewabilityConfigVal}
            />
        </View>
    )
}


export default Home;