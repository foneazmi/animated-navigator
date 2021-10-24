import React from "react";

import { StatusBar } from "expo-status-bar";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles, PHOTO_PROFILE } from "./style";
import { Navigation } from "./Navigator";
import { MotiView, useAnimationState } from "moti";

const useFadeInDown = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      translateY: -15,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
  });
};

function Body() {
  const fadeInDown = useFadeInDown();
  const scaleIn = useAnimationState({
    hide: {
      scale: 0.6,
      borderRadius: 20,
      transform: [
        {
          translateX: 80,
        },
        {
          translateY: 100,
        },
      ],
    },
    show: {
      scale: 1,
      borderRadius: 0,
      transform: [
        {
          translateX: 0,
        },
        {
          translateY: 0,
        },
      ],
    },
  });

  const onPress = () => {
    fadeInDown.transitionTo((state) => {
      if (state === "show") {
        return "hide";
      } else {
        return "show";
      }
    });

    if (scaleIn.current === "show") {
      scaleIn.transitionTo("hide");
    } else {
      scaleIn.transitionTo("show");
    }
  };

  return (
    <MotiView delay={300} state={scaleIn} style={styles.body}>
      <Pressable
        onPress={onPress}
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <Text>Content</Text>
      </Pressable>
    </MotiView>
  );
}

export const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={{ uri: PHOTO_PROFILE }} style={styles.photoProfile} />
        <Text style={styles.name}>Cantana Prinya</Text>
        <Text style={styles.description}>Software Engineer</Text>
        <Navigation />
      </View>
      <Body />
    </SafeAreaView>
  );
};
