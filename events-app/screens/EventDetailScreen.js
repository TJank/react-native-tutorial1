import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { HeaderBackButton } from '@react-navigation/elements'


function EventDetailScreen({ route, navigation }) {
  const {eventId, title, description} = route.params;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'New Title',
      headerLeft: () => (
        <HeaderBackButton
          tintColor='white'
          label='Back'
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [])
  
  return (
    <View style={styles.screen}>
        <Text>This is the event detail screen</Text>
        <Text>{title}</Text>
        <Text>Event id = {eventId}</Text>
        <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default EventDetailScreen