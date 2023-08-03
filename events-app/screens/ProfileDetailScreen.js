import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { HeaderBackButton } from '@react-navigation/elements'


function ProfileDetailScreen({ route, navigation }) {
  const {profileId} = route.params;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile Detail',
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
        <Text>This is the profile detail screen</Text>
        <Text>Profile id = {profileId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default ProfileDetailScreen