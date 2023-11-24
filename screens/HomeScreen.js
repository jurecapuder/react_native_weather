import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from "../theme";

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />

      <Image
        blurRadius={70}
        source={require('../assets/images/bg.png')}
        className="absolute h-full w-full"
      />

      <SafeAreaView className="flex flex-1 mt-10">
        {/* Search section */}
        <View
          style={{height: '7%'}}
          className="mx-4 relative z-50"
        >
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: theme.bgWhite(0.2)}}
          >
            {
              showSearch ? (
                <TextInput
                  placeholder="Search city"
                  placeholderTextColor={"lightgray"}
                  className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                />
              ) : null
            }

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{backgroundColor: theme.bgWhite(0.3)}}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon
                size="25"
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}