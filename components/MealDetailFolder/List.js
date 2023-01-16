import { StyleSheet, Text, View } from 'react-native';

function List({ data }) {
  return data.map((dataItem) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataItem}>
        {dataItem}
      </Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#e2b497',
    paddingVertical: 4,
    marginVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 12,
    borderRadius: 6,
  },
  itemText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
