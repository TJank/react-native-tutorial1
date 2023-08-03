import { Text, View, Button } from "react-native"


function ProfilesScreen({ navigation }) {
  return (
    <View>
        <Text>Profiles screen</Text>
        <Button title="one profile" 
            onPress={() => navigation.navigate('Profile', {profileId: 1})}
        />
    </View>
  )
}

export default ProfilesScreen