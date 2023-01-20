import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions, FlatList,
    ScrollView,
    View, Image, Text, TouchableOpacity, ImageBackground
} from 'react-native'
import { appImages } from '../../../assets/utilities/index'
import {
    Button,
    TextInput,
    Divider,
    TouchableRipple,
    Appbar,
} from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
const App = () => {
    const navigation = useNavigation()
   
    const [buttons, setbuttons] = useState([
        {
            id: 1,
            name: 'All',
            src: appImages.icon,
            bg: '#BE8C2B'
        },
        {
            id: 2,
            name: 'Rings',
            src: appImages.g3,
            bg: '#ffff'
        },
        {
            id: 3,
            name: 'Necklaces',
            src: appImages.g2,
            bg: '#ffff'
        },
        {
            id: 4,
            name: 'Earrings',
            src: appImages.g1,
            bg: '#ffff'
        },
        {
            id: 5,
            name: 'Bracelets',
            src: appImages.g,
            bg: '#ffff'
        },
    ]);
    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            src: appImages.mask,
            header: 'Engagement Ring',
            date: '$165.00'
        },
        {
            id: 2,
            src: appImages.neck,
            header: 'Gold Necklace',
            date: '$100.00'
        },
        {
            id: 3,
            src: appImages.ear,
            header: 'Gold Earrings',
            date: '$165.00'
        },
        {
            id: 4,
            src: appImages.hand1,
            header: 'Baracelets',
            date: '$100.00'
        },
    ]);


    return (
        <ScrollView style={styles.myBackground}
            // contentContainerStyle={{ paddingBottom: '100%' }}
            keyboardShouldPersistTaps='handled'
        >
            <Appbar.Header
                style={{ backgroundColor: '#ffff' }}>
                <Appbar.Action />
                <Appbar.Content style={{ alignItems: 'center' }} title="Home" />
                <Appbar.Action />
            </Appbar.Header>

            <View style={{ marginTop: '5%' }}>
                <View style={styles.v1}>
                    <Text style={styles.textbl}>Categories</Text>
                    <TouchableOpacity style={styles.btn1} activeOpacity={0.6} onPress={() => navigation.navigate('Categories')} >
                        <Text style={styles.textw}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        horizontal
                        style={{}}
                        data={buttons}
                        showsHorizontalScrollIndicator={false}
                        // disableVirtualization={true}
                        // scrollEnabled={isScrollEnabled}
                        renderItem={({ item, index }) => {
                            return <View style={{ marginLeft: 23, marginTop: 10 }}>
                                <View style={[styles.fv1, { backgroundColor: item.bg, }]}>
                                    <Image source={item.src} style={styles.gimage} resizeMode={'stretch'} />
                                </View>
                                <Text style={styles.textg}>{item.name}</Text>
                            </View>
                        }}

                        numColumns={1}
                        keyExtractor={item => item.id}
                    />
                </View>




                <View style={{ marginVertical: '5%', marginHorizontal: '5%' }}>
                    <Text style={styles.textbl}>New Jewelry</Text>


                    <FlatList
                        data={TEMP_DATA}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return <View
                                style={styles.optionsView}
                            >
                                <TouchableOpacity activeOpacity={0.6}
                                    onPress={() => navigation.navigate('PopularEvent')}>
                                    <ImageBackground source={item.src} style={styles.imgs} >
                                        {
                                            index === 0 ?
                                                (
                                                    <TouchableOpacity style={styles.op}>
                                                        <Text style={styles.textw}>New</Text>
                                                    </TouchableOpacity>
                                                ):index === 1 ?
                                                (
                                                    <TouchableOpacity style={styles.op}>
                                                        <Text style={styles.textw}>Sold Out</Text>
                                                    </TouchableOpacity>
                                                ):
                                                 
                                                <Text> </Text>
                                        }
                                
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ borderTopWidth: 1, borderTopColor: '#DBDBDB' }}>
                                    <View style={{ marginVertical: '4%', marginHorizontal: '5%' }}>
                                        <Text style={{ fontSize: 15, color: '#3668A5' }}>{item.header}</Text>
                                        <Text style={{ fontSize: 20, color: '#BE8C2B', marginTop: '2%' }}>{item.date}</Text>
                                    </View>
                                </View>
                            </View>
                        }}
                        numColumns={1}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>

        </ScrollView >

    )
}

export default App;