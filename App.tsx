import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { BannerAd, BannerAdSize, RewardedAd, RewardedAdEventType, TestIds } from 'expo-google-mobile-ads';

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: true,
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Exam Center Ai</Text>
      <Button title="Start Mock Test" onPress={() => navigation.navigate('MockTest')} />
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
      />
    </View>
  );
}

function MockTestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mock Test Questions will appear here</Text>
    </View>
  );
}

function ProfileScreen() {
  const [coins, setCoins] = useState(0);

  const showRewardedAd = () => {
    rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      setCoins((prev) => prev + 5); // Add 5 coins per ad watched
    });
    rewarded.load();
    rewarded.show();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Text>Coins: {coins}</Text>
      <Button title="Watch Ad to Earn Coins" onPress={showRewardedAd} />
    </View>
  );
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MockTest" component={MockTestScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}