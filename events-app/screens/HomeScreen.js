import { Text, View, StyleSheet, Button } from 'react-native'
import EventList from '../components/EventList';
import { useEffect, useState } from 'react';

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/events/');
    const data = await response.json()
    setData(data);
  }
  
  return (
    <View style={styles.screen}>
        <EventList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default HomeScreen