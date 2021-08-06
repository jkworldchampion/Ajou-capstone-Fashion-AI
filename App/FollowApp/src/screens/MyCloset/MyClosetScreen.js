import React from 'react';
import {Button, Text, View} from 'react-native';

const MyClosetScreen = ({navigation}) => {
    return (
        <View>
            <Text>This is My Closet</Text>
            <Button
                title="myLook"
                onPress={() => {
                    navigation.navigate('MyLook');
                }}
            />
            <Button
                title="Virtual Try On"
                onPress={() => {
                    navigation.navigate('TryOn');
                }}
            />
        </View>
    );
};

export default MyClosetScreen;
