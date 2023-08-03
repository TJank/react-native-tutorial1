import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'


function EventItem({ id, name, description, qr_code }) {

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('EventDetails', {eventId: id, title: title, description: description})}
        style={styles.card}
      >
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Image 
          style={{ width: 100, height: 100}}
          source={{ uri: qr_code }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#c5c5c5',
    borderRadius: 8,
    marginVertical: 5,
    padding: 30,
  }
});

export default EventItem