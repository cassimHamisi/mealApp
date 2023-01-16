import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";

function CategoriesScreens(props) {
  const { navigation } = props;
  const renderItemFunction = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("Meals Overview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItemFunction}
      numColumns={2}
    />
  );
}

export default CategoriesScreens;
