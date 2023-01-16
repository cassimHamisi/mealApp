import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function StarIcon({ icon, onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedIcon}
    >
      <Ionicons name={icon} size={30} color={color} />
    </Pressable>
  );
}
export default StarIcon;
const styles = StyleSheet.create({
  pressedIcon: {
    opacity: 0.7,
  },
});
