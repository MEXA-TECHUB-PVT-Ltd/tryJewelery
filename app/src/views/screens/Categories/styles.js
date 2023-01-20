import { StyleSheet } from 'react-native'
// import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({
    // #BE8C2B
    // #3668A5
    myBackground: {
        backgroundColor: '#FFFF',
    },

    textbl: {
        color: 'black',
        fontSize: 20
    },
    optionsView: {
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: "#DBDBDB",
        // marginLeft: 20, 
        marginTop: 30,
        width: '100%',
        // height: 240,
    },
    imgs: {
        height: 165, width: '100%',
        resizeMode: 'stretch',
        alignItems: 'flex-end'
    },
    op: {
        backgroundColor: '#BE8C2B',
        borderRadius: 6,
        width: 65,
        height: 27,
        alignItems: 'center',

    },

})

export default STYLES; 