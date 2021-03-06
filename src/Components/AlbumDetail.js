import React from 'react';
import { View, Text, Image ,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from "./Button";

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={style.thumbnailContainerStyle}>
                    <Image
                        source={{ uri: props.album.thumbnail_image }}
                        style={style.thumbnailStyle}
                    />
                </View>
                <View style={style.textContainer}>
                    <Text style={style.headerTextStyle}>{props.album.title} </Text>
                    <Text>{props.album.artist} </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={style.imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
            <CardSection>
                <Button text={"Buy"} onPress={()=> Linking.openURL(props.album.url)} >
                    Buy Now
                    </Button>
            </CardSection>

        </Card>
    );
};

const style = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 20,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetail;
