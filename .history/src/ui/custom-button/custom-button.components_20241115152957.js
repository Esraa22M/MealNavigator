tomization options for touch interactions.
Includes features like onPressIn, onPressOut, and onLongPress.
Handles hover and focus in addition to press states, making it more suitable for a variety of devices.
Allows to define a HitRect area via the hitSlop prop to widen the area a press is registered without increasing the size of the button. Essentially, hitSlop specifies how far the touch area extends beyond the bounds of the visual element.
Use Case: Recommended for new React Native projects due to its versatility and comprehensive feature set.
Creating a Custom Button
We will now create a new customizable button component, called AppButton:

import { Pressable, StyleSheet, Text } from "react-native";

const AppButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
            ? "#aa0000"
            : props.color || "red",
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
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  text: { color: "white" },
});

export default AppButton;
The AppButton has one required prop, which is the onPress function. It's styles can be adjusted by passing textStyles or buttonStyles. For this component, style can be passed as a function instead of an object. We use this to create a press effect by changing the background color on the press of a finger
for a short time. If the button is disabled we deactivate that effect and set it to a shade of gray to indicate this to the user visually. Last but not least, accessible and accessibilityLabel are set so that people who use VoiceOver or TalkBack know what element they have selected. A screen reader will verbalize this string when the associated element is selected.

You can find an online version of the button here.

Advanced Options
Adding Icons: Icons can be added to the button by using libraries like react-native-vector-icons.
Animations: Animations like changing the background color can be added by using Animated or LayoutAnimation.
Conclusion
Creating a custom button in React Native is a straightforward process and can significantly enhance an app's user experience. By customizing styles and adding features like icons and animations, a button that perfectly fits an app's design can be created. The Pressable component, with its extensive customization options, provides a versatile, future-proof and comprehensive solution for touchable interactions.

profile
Heroku
Promoted

Heroku

Build apps, not infrastructure.
Dealing with servers, hardware, and infrastructure can take up your valuable time. Discover the benefits of Heroku, the PaaS of choice for developers since 2007.

Visit Site

Top comments (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
profile
Sentry
Promoted

Sentry image

See why 4M developers consider Sentry, “not bad.”
Fixing code doesn’t have to be the worst part of your day. Learn how Sentry can help.

Learn more

Read next
sebastienlorber profile image
This Week In React #208 : Compiler, Next.js, Docusaurus, React Navigation, Shopify, Reanimated, BottomTabs, Container Queries...
Sebastien Lorber - Nov 8

mana95 profile image
Understanding about React Outlet with proper routing
Manoj Prasanna 🚀 - Oct 19

amenibensaada profile image
Client-Side Rendering and SPAs in Web Development🌐
Ameni Ben Saada - Nov 4

griseduardo profile image
E2E testing in React with Cypress
Eduardo Henrique Gris - Oct 28


Pascal C
Follow
I craft articles that delve into the technical abyss I encounter in my work, highlighting the process of failing forwards.
Location
Germany
Joined
Dec 2, 2023
More from Pascal C
How to create React Native component library
#reactnative #mobile #javascript
Info.plist Basics für React-Native Entwickler
#reactnative #ios #mobiledevtips #iosappconfig
Gradle Essentials für React Native Entwickler
#reactnative #gradle #android #androiddev
profile
Sentry
Promoted

Sentry mobile image

Is your mobile app slow? Improve performance with these key strategies.
Improve performance with key strategies like TTID/TTFD & app start analysis.

Read the blog post

import { Pressable, StyleSheet, Text } from "react-native";

const AppButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
            ? "#aa0000"
            : props.color || "red",
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
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  text: { color: "white" },
});

export default AppButton;