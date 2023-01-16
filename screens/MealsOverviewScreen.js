import { CATEGORIES, MEALS } from '../data/dummy_data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen(props) {
  const { route, navigation } = props;

  const catID = route.params.categoryId;
  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catID) >= 0
  );

  // Using navigation setOptions with uselayout effect
  useLayoutEffect(() => {
    // Extract The Category Title
    const categoryTitle = CATEGORIES.find(
      (catItem) => catItem.id === catID
    ).title;

    navigation.setOptions({
      title: `     😋😋 ${categoryTitle} Food`,
    });
  }, [navigation, catID]);

  return <MealsList displayMeals={displayMeals} />;
}
export default MealsOverviewScreen;
