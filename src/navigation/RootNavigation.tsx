import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import {
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: "#f23f5a",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        borderWidth: 5,
        borderColor: "white",
        marginTop: -18,
      }}
    >
      <FontAwesome name="camera" size={20} color={"white"} />
      <Text style={{ color: "white", marginTop: 2 }}>Sat</Text>
    </TouchableOpacity>
  );
};

const RootNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#f24e61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <Foundation color={color} size={24} name="home" />;
          },
        }}
      />

      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <View
                  style={{
                    zIndex: 110,
                    position: "absolute",
                    top: -4,
                    right: -8,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: "#f24e61",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>2</Text>
                </View>
                <Ionicons color={color} size={24} name="notifications" />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Sat"
        component={HomeNavigation}
        options={{
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />

      <Tab.Screen
        name="Sohbet"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                size={24}
                name="message-processing"
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="İlanlarım"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign color={color} size={24} name="appstore1" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
