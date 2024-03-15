import { View, Text, Switch } from 'react-native'
import React from 'react'

const CustomToggle = ({ value, onValueChange }) => {
    return (
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: 'text-gray-500', true: 'text-green-500' }}
        thumbColor={value ? 'text-green-700' : 'text-gray-300'}
        style={{width: 30}}
      />
    );
  };
  
  export default CustomToggle;