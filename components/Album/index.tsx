import React from 'react'
import { Text, View } from '../Themed';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles'

import {Album} from '../../types'
import { useNavigation } from '@react-navigation/native';



export type AlbumProps = {
    album: Album;
}

const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation();


    const onPress= () => {
        // console.warn(` Album pressed:  ${props.album.artistsHeadline}`);
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {/* image */}
                <Image 
                    source={{uri: props.album.imageUri}}
                    style={styles.image}
                />
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableOpacity>

        )
}

export default AlbumComponent;