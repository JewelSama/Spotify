import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20
    },
    image:{
        width: 200,
        height: 200,
        margin: 15
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorContainer:{
        flexDirection: 'row',
        margin: 5
    },
    creator:{
        margin: 5,
        fontSize: 15,
        marginRight: 3
    },
   dot:{
       marginTop: 13,
        height: 6,
        width: 6,
        borderRadius: 3,
        backgroundColor: '#1db954'
   },
    likes:{
        margin: 5,
        fontSize: 15,
        marginLeft: 3
    },
    button:{
        backgroundColor: '#1db954',
        height: 50,
        width: 165,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default styles;