import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('')
  const [taskArray, setTaskArray] = useState([])

  const addTask = () => {
    if (task !== '') {
      Keyboard.dismiss()
      setTaskArray([...taskArray, task])
      setTask('')
    }
  }

  const filteredTasks = (index) => {
    let itmesCopy = [...taskArray]
    itmesCopy.splice(index, 1)
    setTaskArray(itmesCopy)
    console.log('clicked')
  }

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text> 

        <View style={styles.items}>
          {
            taskArray.map((task, index) => (
              <TouchableOpacity key={index} onPress={() => filteredTasks(index)}>
                <Task 
                text={task} 
              />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input}
          placeholder='Write a task'
          onChangeText={text => setTask(text)}
          value={task}
        />

        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
    paddingTop: 70,
   },
  taskWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itmes: {
    margin: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#55BCF6',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#55BCF6',
    borderWidth: 1
  },
  addText: {},
});
