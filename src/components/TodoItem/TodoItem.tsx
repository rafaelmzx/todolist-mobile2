
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { todoItemStyles } from './style';

export interface TodoItemProps {
  name: string;
  completed: boolean;
  onPress: () => void;
  onDeletePress: any
}

const TodoItem: React.FC<TodoItemProps> = ({ name, completed, onPress }) => {
    return (
      <View style={todoItemStyles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={completed ? todoItemStyles.completedTitle : todoItemStyles.title}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
};
  
  
export default TodoItem;
   