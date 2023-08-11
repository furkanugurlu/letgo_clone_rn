import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryFiltreScreen, Home } from "../screens";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MainHeaderComponent = ({ filter }: { filter?: boolean }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerW}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        {filter ? (
          <FontAwesome5 name="arrow-left" size={24} color="#989898" />
        ) : (
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            style={styles.headerI}
          />
        )}
      </TouchableOpacity>
      <TextInput style={styles.headerTI} placeholder="Ara..."></TextInput>
      <Text style={styles.headerT}>{filter ? "Filtrele(1)" : "Filtrele"}</Text>
    </SafeAreaView>
  );
};

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
      <Stack.Screen
        name="CategoryFiltreScreen"
        component={CategoryFiltreScreen}
        options={{
          header: () => <MainHeaderComponent filter />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  headerW: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginBottom: 10,
  },
  headerI: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTI: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    marginHorizontal: 10,
    height: 35,
    borderRadius: 10,
    textAlign: "center",

    fontSize: 15,
  },
  headerT: {
    color: "#ff184d",
    fontSize: 18,
  },
});
