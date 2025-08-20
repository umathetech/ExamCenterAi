<<<<<<< HEAD
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
=======
import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AdMobBanner } from "expo-ads-admob";

export default function App() {
  const handleBannerError = (e: any) => {
    console.log("Ad failed to load: ", e);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📘 ExamCenterAi</Text>
      <Text style={styles.subtitle}>An AI App for all Competitive Exams in India</Text>

      <View style={styles.buttonBox}>
        <Button title="Start Practice Test" onPress={() => alert("Test Started")} />
      </View>

      <View style={styles.buttonBox}>
        <Button title="Daily Quiz" onPress={() => alert("Daily Quiz")} />
      </View>

      <View style={styles.buttonBox}>
        <Button title="AI Assistant" onPress={() => alert("Ask AI")} />
      </View>

      {/* ✅ AdMob Banner */}
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" 
        servePersonalizedAds
        onDidFailToReceiveAdWithError={handleBannerError}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007bff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonBox: {
    width: "80%",
    marginVertical: 10,
  },
});
>>>>>>> a12910a1236334c3c34a9b5f83fc4eb0d68cf0c7
