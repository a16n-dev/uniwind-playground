import {FlashList} from "@shopify/flash-list";
import {useEffect, useState} from "react";
import {Pressable, Text, View, FlatList} from "react-native";

export default function App() {
    const [showBasicList, setShowBasicList] = useState(false);
    const [showClassNameList, setShowClassNameList] = useState(false);

    useEffect(() => {
        if(showBasicList){
            setShowBasicList(false)
        }
        if(showClassNameList) {
            setShowClassNameList(false)
        }
    }, [showBasicList, showClassNameList]);

    return (
        <View className={'flex-1 py-16'}>
            <Pressable
                className={'m-4 px-4 py-4 rounded-sm bg-slate-800'}
                onPress={() => {
                    setShowBasicList(true);
                }}>
                <Text className={'text-white'}>
                    Show FlashList without classname (fine)
                </Text>
            </Pressable>
            <Pressable
                className={'m-4 px-4 py-4 rounded-sm bg-slate-800'}
                onPress={() => {
                    setShowClassNameList(true);
                }}>
                <Text className={'text-white'}>
                    Show FlashList with classname (crashes)
                </Text>
            </Pressable>
            {showBasicList && <FlashList renderItem={() => null} data={[]} />}
            {showClassNameList && <FlashList renderItem={() => null} data={[]} contentContainerClassName={''}/>}
        </View>
    );
}