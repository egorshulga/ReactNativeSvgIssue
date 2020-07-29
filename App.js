/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Svg, { Rect, ForeignObject } from 'react-native-svg';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Svg>
          <Rect x={100} y={100} width={200} height={200} stroke='black' strokeWidth={1} />
          <ForeignObject x={100} y={100}>
            <View style={{
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: undefined, // set to null (or any color) as a workaround
            }}>
              <Text>Hello World</Text>
            </View>
          </ForeignObject>
        </Svg>
      </SafeAreaView>
    </>
  );
};

export default App;
