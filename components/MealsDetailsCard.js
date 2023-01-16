import { StyleSheet, Text, View } from 'react-native';

function MealsDetailsCard(props) {
  const { duration, complexity, affordability, styleProp, textStyle } = props;
  return (
    <View style={[styles.details, styleProp]}>
      <Text style={[styles.detailItem, textStyle]}>⭐{duration}min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        ⭐{complexity.toUpperCase()}
      </Text>

      <Text style={[styles.detailItem, textStyle]}>
        ⭐{affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealsDetailsCard;

const styles = StyleSheet.create({
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
