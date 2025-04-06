import { Pressable, StyleSheet, Text } from "react-native";
const AppButton = (props) => {

  return (
    <Pressable
      style={({ pressed }) => [
        pressed?{
          backgroundColor:props.color,
          opacity:0.7
        }:{backgroundColor:props.color,opacity:1},
        styles.container,
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius:15,
    alignItems: "center",
    backgroundColor:"black",
  },
  text: { color: "white" },
});

export default AppButton;