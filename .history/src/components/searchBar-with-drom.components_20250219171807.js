import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const SearchBarWithDropdown = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // قائمة الخيارات
  const options = ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Salad'];

  // تحديث القائمة بناءً على الإدخال
  const handleSearch = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      const filtered = options.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredOptions(filtered);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  // عند اختيار عنصر
  const handleOptionSelect = (option) => {
    setSearchText(option);
    setDropdownVisible(false);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Search"
        value={searchText}
        onChangeText={handleSearch}
        mode="outlined"
      />

      {dropdownVisible && (
        <FlatList
          data={filteredOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#f0f0f0',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
              onPress={() => handleOptionSelect(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            marginTop: 4,
            maxHeight: 150, // تحديد أقصى ارتفاع
          }}
        />
      )}
    </View>
  );
};

export default SearchBarWithDropdown;
