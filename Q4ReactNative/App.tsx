import {ScrollView} from 'react-native';
import React from 'react';
import data from './Data';
import Square from './Square';
import styles from './style';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}

export default App;
