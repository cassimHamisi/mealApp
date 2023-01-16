import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../MealItem';

function MealsList({ displayMeals }) {
  const renderItemFunction = (itemData) => {
    const item = itemData.item;

    const mealItemData = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemData} />;
  };

  return (
    <View style={styles.rootContainer}>
      {/* <Text>Meals Overview Screen - {catID}</Text> */}
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunction}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
  },
});
