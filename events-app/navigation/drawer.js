import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { View, Image, StyleSheet, Linking, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: '#99f6e4'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', height: 140}}>
                            <Image 
                                style={{width: 100, resizeMode: 'contain'}}
                                source={require('../assets/icon.png')}
                            />
                        </View>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="More Info"
                            onPress={() => Linking.openURL('https://google.com')}
                            icon={() => (
                                <Ionicons name='logo-google' color='white' size={22} />
                            )}
                        />
                    </SafeAreaView>
                )
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name='HomeStack' component={HomeStack} 
                options={{
                    title: 'Home',
                    drawerIcon: () => (
                        <Ionicons name='home' size={22} color='white' />
                    )
                }}
            />

            <Drawer.Screen
                name='ProfileStack' component={ProfileStack}
                options={{
                    title: 'Profiles',
                    drawerIcon: () => (
                        <MaterialCommunityIcons name='face-man-profile' size={22} color='white' />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
    }
});
