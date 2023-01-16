import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreens from './screens/CategoriesScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigatorFn() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'brown' },
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#797470',
        // drawerInactiveBackgroundColor: 'lightgrey',
        drawerActiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="CategoriesDrawer"
        component={CategoriesScreens}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <FavoriteContextProvider>
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: { backgroundColor: 'brown' },
                  contentStyle: { backgroundColor: '#3f2f25' },
                  headerTintColor: 'white',
                }}
              >
                <Stack.Screen
                  name={'Meals Categories'}
                  component={DrawerNavigatorFn}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name={'Meals Overview'}
                  component={MealsOverviewScreen}
                />
                <Stack.Screen
                  name={'MealDetailScreen'}
                  component={MealDetailScreen}
                  options={{
                    title: `Meal Detail`,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </FavoriteContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
