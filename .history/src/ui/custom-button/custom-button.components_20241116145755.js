import { Pressable, StyleSheet, Text } from "react-native";

const AppButton = (props) => {
  console.log(	 props.theme.colors.bg.primary);

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
            ? "#ccc"
            : props.color || "#ccc",
        },
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
    paddingVertical: 10,
    alignItems: "center",
    width:250,
  },
  text: { color: "white" },
});

export default AppButton;