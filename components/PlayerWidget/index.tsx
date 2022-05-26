import { Image} from 'react-native'
import React from 'react'
import {View, Text} from '../Themed';
// import { Song } from '../../types';
import styles from './styles'



const song = {
  id: '1',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  title: 'Dattebayo',
  artist: 'Jewel~Sama',
}

const PlayerWidgit = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: song.imageUri}}
            style={styles.image}
        />

        <View style={styles.rightContainer}> 
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
        </View>
    </View>
  )
}

export default PlayerWidgit;