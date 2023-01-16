import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

function CategoryGridTile(props) {
  const { onPress } = props;
  const { title, color } = props;
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : '',
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // for Ios
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  pressable: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});
