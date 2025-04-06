import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const App = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // عند فتح لوحة المفاتيح
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // عند إغلاق لوحة المفاتيح
      }
    );

    // تنظيف الـ Listeners عند تدمير العنصر
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // لتجنب مشاكل الـ Layout على iOS
    >
      {!isKeyboardVisible && (
        <Text style={styles.element}>
          This element is hidden when keyboard opens
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    marginTop: 20,
  },
  element: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
  },
});

export default App;
