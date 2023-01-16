import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import List from '../components/MealDetailFolder/List';
import Subtitle from '../components/MealDetailFolder/Subtitle';
import MealsDetailsCard from '../components/MealsDetailsCard';
import StarIcon from '../components/StarIcon';
import { MEALS } from '../data/dummy_data';
// import { FavoriteContext } from '../store/context/favorite-context';
import { removeFavorite } from '../store/redux/favorite';
import { addFavorite } from '../store/redux/favorite';
import { useSelector, useDispatch } from 'react-redux';

function MealDetailScreen({ route, navigation }) {
  const favMealsIds = useSelector((state) => state.favoriteMealItem.ids);
  const dispatch = useDispatch();
  // const favoriteCtx = useContext(FavoriteContext);
  const routeMealId = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === routeMealId);

  // const mealsFavorite = favoriteCtx.ids.includes(routeMealId);
  const mealsFavorite = favMealsIds.includes(routeMealId);

  const headerFavButtonHandler = () => {
    if (mealsFavorite) {
      // favoriteCtx.removeFavorite(routeMealId);
      dispatch(removeFavorite({ id: routeMealId }));
    } else {
      // favoriteCtx.addFavorite(routeMealId);
      dispatch(addFavorite({ id: routeMealId }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <StarIcon
            icon="heart"
            color={mealsFavorite ? 'red' : 'white'}
            onPress={headerFavButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerFavButtonHandler]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.outerView1}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealsDetailsCard
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.textStyle}
          styleProp={styles.styleProp}
        />
      </View>
      <View style={styles.outerListView}>
        <View style={styles.innerListView}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  image: {
    height: 350,
    width: '100%',
    padding: 0,
  },
  title: {
    fontSize: 28,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#f54242',
    margin: 8,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#f54242',
  },

  styleProp: {},
  outerListView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerListView: {
    width: '80%',
  },
});
