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

       <TouchableOpacity>
        <Text style={styles.radio} ></Text>
            </TouchableOpacity>

            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image style={styles.buttonImage} source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}