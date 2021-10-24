import { StyleSheet, Dimensions } from "react-native";

export const PHOTO_PROFILE =
  "https://images.unsplash.com/photo-1625897428517-7e2062829a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2187&q=80";

export const PHOTO_SIZE = 100;
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#A2D2FF",
  },
  container: {
    marginTop: 30,
    marginHorizontal: 50,
    // padding: 30,
    flex: 1,
  },
  photoProfile: {
    height: PHOTO_SIZE,
    width: PHOTO_SIZE,
    borderRadius: 16,
  },
  name: {
    color: "#1E3163",
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "#1E3163",
    fontSize: 14,
  },
  navigationContainer: {
    marginTop: 60,
  },
  navigationItem: {
    marginTop: 20,
  },
  navigationItemText: {
    fontSize: 16,
  },

  /////
  body: {
    height: height,
    width: width,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
