import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />

      <Image
        blurRadius={70}
        source={require('../assets/images/bg.png')}
        className="absolute h-full w-full"
      />
    </View>
  )
}