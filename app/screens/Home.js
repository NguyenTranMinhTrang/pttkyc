import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image,
    LogBox,
    StatusBar,
    Platform
} from 'react-native';
import { images, COLORS, SIZES, FONTS } from "../constants";
import { Ionicons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

LogBox.ignoreLogs(['Warning: Each']);

const Home = ({ navigation }) => {

    const [focus, setFocus] = React.useState("All");

    // dummy data
    const array = ["All", "Action", "Animation"];

    const film = [
        {
            image: images.john,
            name: "John Wick 3",
            star: 5
        },

        {
            image: images.joker,
            name: "Joker",
            star: 4
        },

        {
            image: images.mission,
            name: "Mission Impossible",
            star: 4
        },
        {
            image: images.twilight,
            name: "Twilight",
            star: 3
        },
        {
            image: images.witcher,
            name: "The Witcher",
            star: 4
        }
    ];

    const release = [
        {
            image: images.lovedeath,
            name: "Love & Death"
        },
        {
            image: images.spiderman,
            name: "Spider Man"
        },
        {
            image: images.titan,
            name: "Attack On Titan"
        },
    ]


    const renderHeader = () => {
        return (
            <View
                style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: SIZES.padding }}
            >
                <Ionicons name="menu" size={50} color={COLORS.white} />
                <TouchableOpacity
                    style={{ alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigation.goBack()}
                >
                    <SimpleLineIcons name="logout" size={30} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderContent = () => {

        const renderItem = ({ item }) => {
            const array = new Array(item.star).fill(0);
            return (
                <View
                    style={{
                        marginRight: SIZES.padding,
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            height: 180,
                            width: 140,
                            borderRadius: SIZES.radius,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: SIZES.radius
                            }}
                        />
                    </View>
                    <Text style={{ ...FONTS.h4, color: COLORS.white, marginVertical: SIZES.base }}>{item.name}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}
                    >
                        {
                            array.map((value, index) => {
                                return (
                                    <AntDesign key={index} name="star" size={24} color={COLORS.primary} />
                                )
                            })
                        }
                    </View>
                </View>
            )
        }

        const renderRelease = ({ item }) => {
            return (
                <View
                    style={{ marginRight: SIZES.padding }}
                >
                    <View
                        style={{
                            height: 140,
                            width: 180,
                            borderRadius: SIZES.radius,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: SIZES.radius
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            bottom: SIZES.padding,
                            left: SIZES.padding
                        }}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{item.name}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={{ paddingHorizontal: SIZES.padding }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>Category</Text>
                <View
                    style={{
                        marginVertical: SIZES.padding,
                        flexDirection: "row"
                    }}
                >

                    {
                        array.map((value) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: focus === value ? COLORS.primary : COLORS.black,
                                        paddingHorizontal: SIZES.padding,
                                        paddingVertical: SIZES.base,
                                        borderRadius: SIZES.radius
                                    }}

                                    onPress={() => setFocus(value)}
                                >
                                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{value}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                <View
                    style={{ marginBottom: SIZES.padding }}
                >
                    <FlatList
                        data={film}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.name}`}
                        renderItem={renderItem}
                    />
                </View>
                <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>New Release</Text>
                <View>
                    <FlatList
                        data={release}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.name}`}
                        renderItem={renderRelease}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.black, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}
        >
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    )
}

export default Home;