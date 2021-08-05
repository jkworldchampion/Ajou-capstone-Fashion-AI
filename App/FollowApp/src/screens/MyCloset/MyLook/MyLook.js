import React, {useContext, useState} from 'react';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components';
import {MyLookContext} from '../../../context/MyLookContext';

const Container = styled.View`
    flex: 1;
`;

const LookBox = ({item, onPress}) => {
    const LookContainer = styled.TouchableOpacity`
        margin: 10px auto;
        height: 120px;
        width: 90%;
        background-color: aliceblue;
        border-radius: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `;

    const ImageContainer = styled.View`
        margin-left: 10px;
        height: 100px;
        width: 100px;
    `;

    const TitleContainer = styled.View`
        flex: 1;
        margin-left: 15px;
    `;
    const TitleText = styled.Text`
        font-weight: bold;
        font-size: 17px;
    `;
    const ClothImage = styled.Image`
        height: 100px;
        width: 100px;
    `;

    return (
        <LookContainer onPress={onPress}>
            <ImageContainer>
                <ClothImage source={item.img} resizeMode="contain" />
            </ImageContainer>
            <TitleContainer>
                <TitleText>{item.name}</TitleText>
            </TitleContainer>
        </LookContainer>
    );
};

const MyLook = ({navigation}) => {
    const [searchVal, setSearchVal] = useState('');
    const lookListContext = useContext(MyLookContext);

    const renderItem = ({item}) => {
        return (
            <LookBox
                item={item}
                onPress={() => {
                    navigation.navigate('MyLookDetail');
                }}
            />
        );
    };
    return (
        <Container>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={setSearchVal}
                value={searchVal}
                round={true}
                lightTheme={true}
            />
            <FlatList
                data={lookListContext.myLookList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    );
};

export default MyLook;
