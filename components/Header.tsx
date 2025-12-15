import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeaderProps = {
  title: string;
  onLeftPress?: () => void;
  leftText?: string;
};

const Header: React.FC<HeaderProps> = ({ title, onLeftPress, leftText }) => {
  return (
    <View style={styles.container}>
      {onLeftPress && leftText ? (
        <TouchableOpacity onPress={onLeftPress} style={styles.leftButton}>
          <Text style={styles.leftText}>{leftText}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.leftButton} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftButton: {
    width: 60,
  },
  leftText: {
    fontSize: 16,
    color: '#007AFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightPlaceholder: {
    width: 60,
  },
});

export default Header;
