import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

function ProductDetail({route, navigation}) {

    const {product} = route.params;

    return (
        <View style={{flex: 1}}>
        <View style={styles.productBackground}>
            <Text style={styles.subtitleText}>
                {product?.category}
            </Text>
            <Text style={styles.titleText}>
                {product?.name}
            </Text>
            <View style={styles.productInfoView}>
                <Text style={styles.productHeader}>
                    Price
                </Text>
                <Text style={styles.productValue}>
                    $ {product?.price}
                </Text>
            </View>
            <View style={styles.productInfoView}>
                <Text style={styles.productHeader}>
                    Size
                </Text>
                <Text style={styles.productValue}>
                    {product?.size}
                </Text>
            </View>
            <View style={styles.productImages}>
                <TouchableOpacity style={styles.productCartBtn} onPress={() => {}}>
                    <Image source={require('../assets/icons/shoppingBag.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.productLikeBtn} onPress={() => {}}>
                    <Image source={require('../assets/icons/heartIcon.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.productImg} source={{uri: product?.image}}></Image>
            </View>
        </View>
        <View style={styles.overviewContainer}>
            <Text style={styles.sectionTitle}>
                Overview
            </Text>
            <View style={styles.proDetails}>
            
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productBackground: {
        backgroundColor: '#9CE5CB',
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: '600',
    },
    titleText: {
        fontSize: 38,
        fontWeight: '700'
    },
    productInfoView: {
        marginTop: 30,
    },
    productHeader: {
        fontSize: 12,
        fontWeight: '600',
    },
    productValue: {
        fontSize: 16,
        fontWeight: '600',
    },
    overviewContainer: {
        marginVertical: 50,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700'
    },
    proDetails: {
        flexDirection: 'row',
        marginTop: 20,
        height: 50,
    },
    productImages: {
        flexDirection: 'row',
        marginTop: 40,
    },
    productLikeBtn: {
        marginLeft: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 20,
        height: 60,
        width: 60,
    },
    productCartBtn: {
        marginLeft: 20,
    },
    productImg: {
        width: 280,
        height: 280,
        marginTop: -180,
        marginLeft: -35,
        resizeMode: 'contain',
    }
});

export default ProductDetail;