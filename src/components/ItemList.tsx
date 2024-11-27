import React from 'react';
import {Button, Text, View} from 'react-native';
import {Task} from '../Screens/TodoScreen';

type Props = {
  item: Task;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const ItemList = ({item, toggleComplete, deleteTask}: Props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text
        style={{
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}
        testID={`taskText-${item.id}`}>
        {item.text}
      </Text>
      <Button
        title="Complete"
        onPress={() => toggleComplete(item.id)}
        testID={`completeButton-${item.id}`}
      />
      <Button
        title="Delete"
        onPress={() => deleteTask(item.id)}
        testID={`deleteButton-${item.id}`}
      />
    </View>
  );
};
