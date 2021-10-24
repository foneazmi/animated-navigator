import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";

const NAVIGATION = [
  {
    name: "Upload",
  },
  {
    name: "Collection",
  },
  {
    name: "Message",
  },
  {
    name: "Settings",
  },
];

export const Navigation = () => (
  <View style={styles.navigationContainer}>
    {NAVIGATION.map((e, index) => {
      return (
        <Pressable key={`${index}-menu`} style={styles.navigationItem}>
          <Text style={styles.navigationItemText}>{e.name}</Text>
        </Pressable>
      );
    })}
  </View>
);
