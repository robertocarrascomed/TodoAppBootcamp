import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

type Props = {
  addTaskFn: (task: string) => void;
};

export const AddTaskComponents = ({addTaskFn}: Props) => {
  const [task, setTask] = useState<string>('');

  return (
    <View>
      <TextInput
        placeholder="New Task"
        value={task}
        onChangeText={setTask}
        testID="taskInput"
      />
      <Button
        title="Add Task"
        onPress={() => {
          setTask('');
          addTaskFn(task);
        }}
        testID="addButton"
      />
    </View>
  );
};
