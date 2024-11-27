import React from 'react';
import TodoScreen from './src/Screens/TodoScreen';
import {SafeAreaView} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <TodoScreen />;
    </SafeAreaView>
  );
};

export default App;
