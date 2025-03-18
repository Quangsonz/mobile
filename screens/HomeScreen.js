import React from 'react';
import {
    View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = [
    { id: '1', name: 'Pizza', image: require('../assets/pizza.jpg') },
    { id: '2', name: 'Burgers', image: require('../assets/burger.jpg') },
    { id: '3', name: 'Steak', image: require('../assets/steak.jpg') },
    { id: '2', name: 'Burgers', image: require('../assets/burger.jpg') },
    { id: '3', name: 'Steak', image: require('../assets/steak.jpg') },
];

const popularItems = [
    { id: '1', name: 'Food 1', author: 'By Viet Nam', price: '1$', image: require('../assets/food1.jpg'), discount: null },
    { id: '2', name: 'Food 2', author: 'By Viet Nam', price: '3$', image: require('../assets/food2.jpg'), discount: null },
    { id: '1', name: 'Food 1', author: 'By Viet Nam', price: '1$', image: require('../assets/food1.jpg'), discount: null },
    { id: '2', name: 'Food 2', author: 'By Viet Nam', price: '3$', image: require('../assets/food2.jpg'), discount: null },
];

const saleOffItems = [
    { id: '3', name: 'Food 3', author: 'By Viet Nam', price: '2$', image: require('../assets/food2.jpg'), discount: '20% OFF' },
    { id: '4', name: 'Food 4', author: 'By Viet Nam', price: '4$', image: require('../assets/food1.jpg'), discount: '15% OFF' },
    { id: '3', name: 'Food 3', author: 'By Viet Nam', price: '2$', image: require('../assets/food2.jpg'), discount: '20% OFF' },
    { id: '4', name: 'Food 4', author: 'By Viet Nam', price: '4$', image: require('../assets/food1.jpg'), discount: '15% OFF' },
];

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Explorer</Text>

            {/* Ô tìm kiếm */}
            <View style={styles.searchContainer}>
                <Icon name="map-marker" size={20} color="#888" style={styles.icon} />
                <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
                <TouchableOpacity>
                    <Icon name="search" size={20} color="#888" />
                </TouchableOpacity>
            </View>

            {/* Danh mục */}
            <View style={styles.row}>
                <Text style={styles.sectionTitle}>Top Categories</Text>
                <TouchableOpacity>
                    <Icon name="filter" size={20} color="orange" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryItem}>
                        <Image source={item.image} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Món ăn phổ biến */}
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.sectionTitle}>Popular Items</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View all</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={popularItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.popularItem}>
                            <Image source={item.image} style={styles.popularImage} />
                            {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
                            <Text style={styles.popularName}>{item.name}</Text>
                            <Text style={styles.popularAuthor}>{item.author}</Text>
                            <Text style={styles.popularPrice}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>

            {/* Món ăn giảm giá */}
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.sectionTitle}>Sale-off Items</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View all</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={saleOffItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.popularItem}>
                            <Image source={item.image} style={styles.popularImage} />
                            {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
                            <Text style={styles.popularName}>{item.name}</Text>
                            <Text style={styles.popularAuthor}>{item.author}</Text>
                            <Text style={styles.popularPrice}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 15 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', padding: 10, borderRadius: 8, marginBottom: 15 },
    icon: { marginRight: 10 },
    searchInput: { flex: 1, fontSize: 16 },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold' },
    viewAll: { color: 'orange' },
    categoryItem: { alignItems: 'center', marginRight: 15 },
    categoryImage: { width: 80, height: 80, borderRadius: 10 },
    categoryText: { fontSize: 14, marginTop: 5 },
    section: { marginBottom: 20 },
    popularItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 15,
        padding: 10,
        width: 140,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    popularImage: { width: '100%', height: 100, borderRadius: 10 },
    discount: {
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 5,
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    popularName: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
    popularAuthor: { fontSize: 12, color: '#777' },
    popularPrice: { fontSize: 16, fontWeight: 'bold', color: 'green', marginTop: 5 },
});

export default HomeScreen;
