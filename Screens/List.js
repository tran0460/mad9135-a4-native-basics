import { SafeAreaView, ScrollView, FlatList } from "react-native";
import { useCallback } from "react";
import { useAppContext } from "../AppContext";
import Card from "../Components/Card";
const List = () => {
  const { data } = useAppContext();
  const renderListItem = useCallback(
    ({ item }) => {
      return <Card data={item} key={item.id} />;
    },
    [data]
  );
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderListItem} />
    </SafeAreaView>
  );
};

export default List;
