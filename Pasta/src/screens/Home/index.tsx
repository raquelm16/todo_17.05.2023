import { styles } from './styles';
import { Image, Text, TextInput, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', 'Já existe o participante cadastrado!')
        }
        //return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
        setParticipants(prevState => [...prevState, participantName]);

        //limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');

    }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
        
        <Image style={styles.icon} source={require('../../../assets/icon.png')} />

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Image style={styles.buttonText} source={require('../../../assets/plus.svg')} />
            </TouchableOpacity>
        </View>

        
        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}//AQUI VC CONSEGUE MUDAR O QUE TÁ NA LISTA
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )} 
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
    )
  }
  