import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useCallback } from "react";
import { useAppContext } from "../AppContext";
import Card from "../Components/Card";
const List = ({ navigation }) => {
  const { data } = useAppContext();
  const renderListItem = useCallback(
    ({ item }) => {
      return <Card data={item} navigation={navigation} key={item.id} />;
    },
    [data]
  );
  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={data} renderItem={renderListItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
});
export default List;
