import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens";

export default function App() {
  return (
    <View style={styles.main}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 44,
    flex: 1,
  },
});
