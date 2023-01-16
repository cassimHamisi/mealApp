import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import MealsDetailsCard from '../screens/MealDetailScreen';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  const onPressItemHandler = () => {
    navigation.navigate('MealDetailScreen', {
      id: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : '')}
        android_ripple={{ color: 'lightgrey' }}
        onPress={onPressItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>⭐{duration}min</Text>
            <Text style={styles.detailItem}>⭐{complexity.toUpperCase()}</Text>

            <Text style={styles.detailItem}>
              ⭐{affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    paddingBottom: 2,
    borderRadius: 10,
    elevation: 8,
    // for Ios
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  innerView: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },

  image: {
    height: 220,
    width: '100%',
    padding: 0,
  },
  title: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: '#f54242',
  },
  details: {
    flexDirection: 'row',
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailItem: {
    marginHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
