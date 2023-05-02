import React from "react";
import { View, FlatList } from "react-native";
import NoteItem from "./item";
import { styles } from "./styles";

const Notes = ({ notes, onSelectItem }) => {
    const renderItem = ({ item }) => (
        <NoteItem item={item} onSelectItem={onSelectItem} />
    );

    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
            renderItem={renderItem}
            data={notes}
            keyExtractor={keyExtractor}
            alwaysBounceVertical={false}
        />
    )
};

export default Notes;