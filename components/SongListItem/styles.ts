import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer:{
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title:{
        fontSize: 18,
    },
    artist:{
        fontSize: 14,
    },
    image:{
        width: 65,
        height: 65,
    }
})

export default styles;