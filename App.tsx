import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SumaHoksApp: React.FC = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const suma = parseFloat(number1) + parseFloat(number2);
    setResult(isNaN(suma) ? '⟳' : suma.toString());
  }, [number1, number2]);

  return (
    <View style={{ 
      backgroundColor:"#53CDDA",
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      }}
      >
      <TextInput
        style={{ 
          width: 200, 
          height: 60, 
          borderWidth: 2, 
          borderColor: 'black', 
          marginBottom: 10, 
          paddingHorizontal: 10,
          borderRadius:5
        }}

        placeholder="numero 1"
        value={number1}
        onChangeText={setNumber1}
        keyboardType="numeric"
      />

      <Text
      style={{  
        fontSize: 25,
        borderColor: "black", 
        marginTop:0,
        // marginLeft:10,
        // marginRight: 10
      }}
      >+
      </Text>
      <TextInput
        style={{ 
          width: 200, 
          height: 60, 
          borderWidth: 2, 
          borderColor: "black", 
          marginBottom: 10, 
          paddingHorizontal: 10,
          borderRadius: 5
        }}
        placeholder="numero 2"
        value={number2}
        onChangeText={setNumber2}
        keyboardType="numeric"
      />

        {typeof result === 'string' && (
        <Text style={{ 
          color: 'black', 
          fontSize: 25, 
          marginTop: -40,
          top: 42,
          right: 45

        }}>Result: {result}</Text>
      )}

      <Text style={{ 
        color: 'black', 
        fontSize: 30, 
        marginBottom: 10 
        }}>
        {result}</Text>
    </View>
  );
};

export default SumaHoksApp;

