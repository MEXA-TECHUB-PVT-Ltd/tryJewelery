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
        fontSize: 16
    },
    textw: {
        color: '#ffff',
        fontSize: 12,
        paddingTop: '7%'
    },
    gimage: {
        width: 26.34,
        height: 23.3,
        marginTop: '23%'
    },
    textg: {
        color: '#77838F',
        fontSize: 12,
        textAlign: 'center'
    },
    v1: {
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn1: {
        backgroundColor: '#BE8C2B', borderRadius: 20, width: 65, height: 27, alignItems: 'center'
    },
    fv1: {
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        alignItems: 'center',
        borderRadius: 6
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
        borderRadius: 10,
        resizeMode: 'stretch',
        alignItems:'flex-end'
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