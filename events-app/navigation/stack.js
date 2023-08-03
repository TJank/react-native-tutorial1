import { createStackNavigator } from '@react-navigation/stack';
import ProfilesScreen from '../screens/ProfilesScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import { HomeTabs } from './tabs';

const Stack = createStackNavigator();

export function HomeStack() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={() => navOptions(navigation)}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeTabs} 
            />
            <Stack.Screen name="EventDetails" component={EventDetailScreen} />
        </Stack.Navigator>
    );
}


export const ProfileStack = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={() => navOptions(navigation)}
        >
            <Stack.Screen name='Profiles' component={ProfilesScreen} />
            <Stack.Screen name='Profile' component={ProfileDetailScreen} />

        </Stack.Navigator>
    )
}