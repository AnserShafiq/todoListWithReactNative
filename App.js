import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import List from './components/List';
export default function App() {

  const [task,setTask]=useState("");
  const [listItems,setListItems]=useState([]);

  const newTaskAddition= () =>{
    Keyboard.dismiss();
    setListItems([...listItems,task]);
    setTask("");
  };

  const doneTask = (index) =>{
    let listCopy=[...listItems];
    listCopy.splice(index,1);
    setListItems(listCopy);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.majorArea}>
        <Text style={styles.Header}>Today's Tasks</Text>
          <ScrollView style={styles.lowerArea}>
            {
              listItems.map((item,index)=>{
                return(
                  <TouchableOpacity key={index} onPress={()=>doneTask(index)}>
                    <List text={item} />
                  </TouchableOpacity>
                );
              })
            }
          </ScrollView>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding":"height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.inputArea} placeholder={"Write A Task.."} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=> newTaskAddition()}>
          <View style={styles.addWrapper}>
            <Text style={styles.Plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  majorArea:{
    paddingTop:80,
    paddingHorizontal:20,
    marginBottom:130,
  },
  Header:{
    fontSize:24,
    fontWeight:'bold',
  },
  lowerArea:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%'
  },
  inputArea:{
    width:250,
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addWrapper:{
    height:60,
    width:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  }
});
