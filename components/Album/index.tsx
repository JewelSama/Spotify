import React from 'react'
import { Text, View } from '../Themed';
import { Image } from 'react-native';
import styles from './styles'

import {Album} from '../../types'



export type AlbumProps = {
    album: Album;
}

const AlbumComponent = (props: AlbumProps) => {
    return(
        <View style={styles.container}>
            {/* image */}
            <Image 
             source={{uri: props.album.imageUri}}
             style={styles.image}
            />
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>



        </View>
    )
}

export default AlbumComponent;