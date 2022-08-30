import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../Style";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-dynamic-vector-icons";
import { Tasks } from "../Data";

import React from "react";

const Home = () => {
  const display = () => {
    return Tasks.map((dat) => {
      return (
        <View style={styles.tasks}>
          <Icon name="circle" size={24} color="black" type="Feather" />
          <Text style={styles.task_text}>{dat.name}</Text>
          <Icon name="calendar" size={24} color="black" type="Entypo" />
          <Text style={styles.task_text}>{dat.due}</Text>
        </View>
      );
    });
  };

  const display2 = () => {
    return Tasks.map((dat) => {
      return (
        <View style={styles.tasks}>
          <Icon name="checkcircle" size={24} color="green" type="AntDesign" />
          <Text style={styles.task_text}>{dat.name}</Text>
          <Icon name="calendar" size={24} color="black" type="Entypo" />
          <Text style={styles.task_text}>{dat.due}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <FontAwesome name="bars" size={24} color="black" />
        <Text style={styles.logo}>
          <Icon name="dot-fill" size={24} color="orange" type="Octicons" />
          CHORES
        </Text>
      </View>
      <View style={styles.sb}>
        <TextInput style={styles.sb_field} placeholder="Add Item" />

        <Icon name="plus-circle" size={26} color="blue" type="FontAwesome" />
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.header2}>TO DO</Text>
        <View>{display()}</View>
      </ScrollView>

      <Text style={styles.header2}>Completed</Text>
      <View>{display2()}</View>
    </View>
  );
};

export default Home;
