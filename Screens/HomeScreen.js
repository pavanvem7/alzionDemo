import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

function HomeScreen({navigation}) {

    const [plantData, setPlantData] = useState([]);

    const getData = () => {
        axios.get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
            .then((res) => {
                setPlantData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    useEffect(() => {
      getData();
    }, [])

    const renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <View style={styles.productBackground}>
                <Text style={styles.subtitleText}>
                    {item?.category}
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Detail', {product: item})}}>
                <Text style={styles.titleText}>
                    {item?.name}
                </Text>
                </TouchableOpacity>
                <View style={styles.productInfo}>
                <Text style={styles.priceText}>
                    $ {item?.price}
                </Text>
                <TouchableOpacity style={styles.productLikeBtn} onPress={() => {}}>
                    <Image source={require('../assets/icons/heartIcon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.productCartBtn} onPress={() => {}}>
                    <Image source={require('../assets/icons/shoppingBag.png')}></Image>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.productImage}>
                <Image style={styles.productImg} source={{uri: item?.image}}></Image>
            </View>
        </View>
    )

    return (
      <View style={styles.container}>
        <FlatList
            data={plantData}
            renderItem={renderItem}
            style={styles.productHolder}
            showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    productHolder: {
        paddingHorizontal: 0,
    },
    productContainer: {
        flexDirection: 'row',
        height: 300,
        width: '100%',
        paddingVertical: 50,
    },
    productBackground: {
        backgroundColor: '#9CE5CB',
        width: '80%',
        height: 200,
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    productImage: {
        height: 150,
        width: '15%',
    },
    subtitleText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#002140',
    },
    titleText: {
        fontFamily: 'Philosopher-Bold',
        fontSize: 32,
        color: '#002140'
    },
    productInfo: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    productLikeBtn: {
        marginLeft: 15,
    },
    productCartBtn: {
        marginRight: 20,
    },
    priceText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#002140',
    },
    productImg: {
        width: 150,
        height: 150,
        marginLeft: -75,
        marginTop: -40,
        resizeMode: 'contain',
    }
});


export default HomeScreen;