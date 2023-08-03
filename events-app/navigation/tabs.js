import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'black'
                },
                tabBarActiveTintColor: 'yellow',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name==='HomeTabs') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'QRCode') {
                        iconName = focused ? 'qr-code' : 'qr-code-outline'
                    }

                    return <Ionicons name={iconName} size={focused ? 35 : size} color={color} />
                }
            })}
        >
            <Tab.Screen 
                name='HomeTabs' 
                component={HomeScreen}
                options={{
                    title: 'Home'
                }}
            />

            <Tab.Screen 
                name='QRCode' component={QRCodeScreen}
            />
        </Tab.Navigator>
    )
}