import { Text, View, StyleSheet, Button, FlatList, RefreshControl } from 'react-native'
import EventItem from './EventItem';


function EventList({ data }) {

  const renderItem = ({item}) => {
    return (
      <EventItem {...item} />
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl 
            refreshing={false}
            onRefresh={() => console.log('refreshing...')}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default EventList