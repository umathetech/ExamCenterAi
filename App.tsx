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
