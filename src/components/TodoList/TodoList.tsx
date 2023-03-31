
import React from 'react';
import { FlatList, View } from 'react-native';
import TodoItem from '../TodoItem/TodoItem';
import { todoStyles } from './style';

interface TodoItemProps {
    name: string;
    completed: boolean;
    onPress: () => void;
    id: number
}

interface TodoListProps {
    todos: TodoItemProps[];
    onCompletedPress: (index: number) => void;
    onDeletePress: (index: number) => void;
    showCompleted: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onCompletedPress, onDeletePress, showCompleted }) => {
  const filteredTodos = showCompleted
    ? todos.filter(todo => todo.completed)
    : todos.filter(todo => !todo.completed);

  const renderItem = ({ item, index }: { item: TodoItemProps; index: number }) => (
    <TodoItem
      name={item.name}
      completed={item.completed}
      onPress={() => onDeletePress(item.id)}
      onDeletePress={() => onDeletePress(index)}
    />
  );

  return (
    <View style={todoStyles.container}>
      <FlatList
        data={filteredTodos}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};



export default TodoList;
