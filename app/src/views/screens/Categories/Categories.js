import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions, FlatList,
    // ScrollView,
    View, Image, Text, TouchableOpacity, ImageBackground
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { appImages } from '../../../assets/utilities/index'
import {
    Button, TouchableRipple, TextInput, Divider, Appbar
} from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
const App = () => {
    const navigation = useNavigation()
    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            src: appImages.mask,
            header: 'Rings',

        },
        {
            id: 2,
            src: appImages.neck,
            header: 'Necklace',
        },
        {
            id: 3,
            src: appImages.ear,
            header: 'Earrings',
        },
        {
            id: 4,
            src: appImages.hand1,
            header: 'Baracelets',
        },
    ]);

    return (
        <ScrollView style={styles.myBackground}
            // contentContainerStyle={{ paddingBottom: '100%' }}
            keyboardShouldPersistTaps='handled'
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '7%', marginTop: '8%' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ alignSelf: 'center' }} >
                    <Image source={appImages.back} style={{ width: 10, height: 15 }} resizeMode='stretch' />
                </TouchableOpacity>
                <Text style={styles.textbl}>Categories</Text>
                <Text></Text>
            </View>
            <View style={{ marginBottom:'10%', marginHorizontal: '5%' }}>

                <FlatList
                    data={TEMP_DATA}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return <View
                            style={styles.optionsView}
                        >
                            <TouchableOpacity activeOpacity={0.6}
                                onPress={() => navigation.navigate('PopularEvent')}
                            >
                                <ImageBackground source={item.src} style={styles.imgs} >
                                    <Image source={appImages.bg} style={styles.imgs} />

                                </ImageBackground>
                            </TouchableOpacity>

                            <View style={{ marginVertical: '2%', marginHorizontal: '5%', alignItems: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#3668A5', marginVertical: '4%' }}>{item.header}</Text>
                            </View>

                        </View>
                    }}
                    numColumns={1}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>

    )
}

export default App;