/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Button, SafeAreaView} from 'react-native';

import React from 'react';
import {getArrayBufferForBlob} from 'react-native-blob-jsi-helper';

function App(): JSX.Element {
  async function handleClick() {
    const blob = await fetch('https://blockchain.info/latestblock').then(r =>
      r.blob(),
    );

    const arrayBuffer = getArrayBufferForBlob(blob);

    console.log('* arrayBuffer.length *', arrayBuffer.length);
  }

  return (
    <SafeAreaView>
      <Button title="Click me" onPress={handleClick} />
    </SafeAreaView>
  );
}

export default App;
