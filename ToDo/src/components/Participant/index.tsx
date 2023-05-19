import {Image, View, Text,TouchableOpacity, Button} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {styles} from './styles';
import { useState } from 'react';

type Props = {
    name: string;
    onRemove: () => void;
}


export function Participant({name, onRemove} : Props){
    const [checkboxState, setCheckboxState] = useState(false)

    return(
        <View style={styles.container}>

            <BouncyCheckbox
                style={{ marginLeft: 12}}
                fillColor={'#595abd'}
                size={18}
                isChecked={checkboxState}
                disableBuiltInState
                onPress={() => setCheckboxState(!checkboxState)}
            />

{/*       <TouchableOpacity>
        <Text style={styles.radio} ></Text>
            </TouchableOpacity>
  */}
            <Text style={styles.name}>
                {name}
            </Text>     
          

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image style={styles.buttonImage} source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}