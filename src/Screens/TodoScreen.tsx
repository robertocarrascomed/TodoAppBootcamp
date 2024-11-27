// TodoScreen.tsx
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AddTaskComponents} from '../components/AddTaskComponents';
import {ItemList} from '../components/ItemList';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    setTasks([
      ...tasks,
      {id: Date.now().toString(), text: task, completed: false},
    ]);
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View>
      <AddTaskComponents addTaskFn={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ItemList
            item={item}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        )}
      />
    </View>
  );
};

export default TodoScreen;
