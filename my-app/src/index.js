import { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { Notes, Input, CustomModal } from './components/index';

export default function App() {
    const [text, setText] = useState('');
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const onAddNote = () => {
        if (text.length === 0) return;
        setNotes([
            ...notes,
            {
                id: Math.random().toString(),
                value: text
            } 
        ]);
        setText('');
    }

    const onHandlerNote = (id) => {
        setModalVisible(!modalVisible);
        const selectedNote = notes.find(note => note.id === id);
        setSelectedNote(selectedNote);
    }

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedNote(null);
    }

    const onHandlerDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
        setModalVisible(!modalVisible);
    }



    return (
        <View style={styles.container}>
        <Input 
            buttonColor='#1D3354'
            buttonTitle='Add'
            onChangeText={(text) => setText(text)}
            onHandlerButton={onAddNote}
            placeholder='Enter your note' 
            value={text}
        />
        <Notes notes={notes} onSelectItem={onHandlerNote} />
        <CustomModal 
            isVisible={modalVisible} 
            animationType='slide' 
            onCancel={onHandlerCancelModal} 
            onDelete={onHandlerDeleteNote} 
            selectedNote={selectedNote}  
        />
        </View>
    );
}
