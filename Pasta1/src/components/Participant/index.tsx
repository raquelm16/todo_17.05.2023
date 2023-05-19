import {Image, View, Text,TouchableOpacity, Button} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';

type Props = {
    name: string;
    onRemove: () => void;
}


export function Participant({name, onRemove} : Props){
    return(
        <View style={styles.container}>

       <TouchableOpacity style={styles.radio} onPress={onRemove}>
            </TouchableOpacity>

            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image style={styles.buttonImage} source={require('../../../assets/trash.svg')} />
            </TouchableOpacity>
        </View>
    )
}