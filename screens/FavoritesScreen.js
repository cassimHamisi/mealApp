import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy_data';
// import { FavoriteContext } from '../store/context/favorite-context';
import { useSelector } from 'react-redux';

function FavoritesScreen(props) {
  //   const favoriteCtx = useContext(FavoriteContext);
  const favriteIds = useSelector((state) => state.favoriteMealItem.ids);
  const favoriteMeals = MEALS.filter((meals) => favriteIds.includes(meals.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootView}>
        <Text style={styles.favText}>No Favorite Meals Added!!</Text>
      </View>
    );
  }

  return <MealsList displayMeals={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
