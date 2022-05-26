import { Image} from 'react-native'
import React from 'react'
import {View, Text} from '../Themed';
// import { Song } from '../../types';
import styles from './styles'
import {AntDesign, FontAwesome} from '@expo/vector-icons'



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
            style={styles.image}/>
            <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={30} color={'#1db954'} />
        <FontAwesome name="play" size={30} color={'#1db954'} />
        </View>
        </View>
    </View>
  )
}

export default PlayerWidgit;