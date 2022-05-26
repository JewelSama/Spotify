import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        // margin: 10,
        position: 'absolute',
        bottom: 49,
        width: "100%",
        borderWidth: 0.2,
        borderColor: 'grey',
        alignItems: 'center',
    },
    rightContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    nameContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },

   
    title:{
        fontSize: 18,
        // marginBottom: -15,
        fontWeight: 'bold',
        margin: 10
    },
    artist:{
        fontSize: 14,
    },
    image:{
        width: 65,
        height: 65,
        marginRight: 10
    }
})

export default styles;