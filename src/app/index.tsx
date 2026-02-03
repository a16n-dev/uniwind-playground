import {FlashList} from "@shopify/flash-list";
import {useEffect, useState} from "react";
import { Text, View, TouchableOpacity} from "react-native";

export default function App() {
    const [showBasicList, setShowBasicList] = useState(false);
    const [showClassNameList, setShowClassNameList] = useState(false);

    /**
     * This useEffect resets the state immediately, to allow for the bug to be consistently reproduced.
     * The same bug can be seen if we allow the user to quickly toggle the state manually, however it only happens some
     * of the time (I assume due to some underlying race condition).
     */
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
            <TouchableOpacity
                className={'m-4 px-4 py-4 rounded-sm bg-slate-800'}
                onPress={() => {
                    setShowBasicList(true);
                }}>
                <Text className={'text-white'}>
                    Show FlashList without classname (fine)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                className={'m-4 px-4 py-4 rounded-sm bg-slate-800'}
                onPress={() => {
                    setShowClassNameList(true);
                }}>
                <Text className={'text-white'}>
                    Show FlashList with classname (crashes)
                </Text>
            </TouchableOpacity>
            {showBasicList && <FlashList renderItem={() => null} data={[]} />}
            {showClassNameList && <FlashList renderItem={() => null} data={[]} contentContainerClassName={''}/>}
        </View>
    );
}