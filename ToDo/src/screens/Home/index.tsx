import { styles } from './styles';
import { Image, Text,  TextInput, View, TouchableOpacity, FlatList, Alert, Button} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        
        if(participants.includes(participantName)){
            return Alert.alert('Sucesso', 'Sua tarefa foi criada!')
        }
        //return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
        setParticipants(prevState => [...prevState, participantName]);

        //limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');

    }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Deletar",`Deseja remover a tarefa ${name}?`,[
            {
                text: 'Não',
                style: 'cancel'
            },{
                text: 'Sim',
                onPress: () => setParticipants(prevState => 
                    prevState.filter(participant => participant !== name))
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
    <View style={styles.fundo}>
        <Image style={styles.icon} source={require('../../../assets/icon.png')} />

        <View style={styles.form}>
            
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Image style={styles.buttonImage} source={require('../../../assets/plus.png')} />
            </TouchableOpacity>
            
        </View>
</View>

<View>
<View style={styles.nav}>

    <View style={styles.itens}>
        <Text style={styles.criadas}>Criadas  </Text>
        <Text style={styles.number}>0</Text>
        </View>

<View style={styles.itens}>
        <Text style={styles.concluidas}>Concluídas  </Text>
        <Text style={styles.number}>0</Text>
</View>
</View>

<View style={styles.line}></View>
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
                <>
                <Image style={styles.emptyImage} source={require('../../../assets/task.png')} />

                <Text style={styles.listEmptyText}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
                </>
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
  