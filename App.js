import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import homeImage from './assets/home.avif';

//
// Screens del Primer Stack
//
function Home1() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
      <Image source={homeImage} style={styles.homeImage}></Image>
      <Text style={styles.label}>Ingresa tu nombre:</Text>
      <TextInput style={styles.input} placeholder="Ingresa tu nombre" onSubmitEditing={(newText) => setText("Bienvenido a Home, " + newText + "!")}></TextInput>
      <Text style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')} style={styles.button}>Ir A Home 2</TouchableOpacity>
    </View>
  );
}

function Home2() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME... 2?</Text>
      <Image source={homeImage} style={styles.homeImage}></Image>
      <Text style={styles.label}>Ingresa tu nombre:</Text>
      <TextInput style={styles.input} placeholder="Ingresa tu nombre" onSubmitEditing={(newText) => setText("Bienvenido a Home 2, " + newText + "!")}></TextInput>
      <Text style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={styles.button}>Ir A Home</TouchableOpacity>
    </View>
  );
}

//
// Screens del Segundo Stack
//
function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR</Text>
      <Text style={styles.description}>
        Segundo Stack - Primer Screen
        {'\n\n'}
        * Botones para navegar a ScreenB2 y ScreenB2 enviando Parametros:
        {'\n'}
        navigation.navigate('ScreenB2', {'{itemId: 1k}'})
        {'\n\n'}
        * Ejemplo de un boton con un Icono de 'Ionicons'
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB2', { itemId: 1 })} style={styles.button}>ScreenB2 itemId: 1</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB2', { itemId: 2 })} style={styles.button}>ScreenB2 itemId: 2</TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Presionaste en el Icono!')}>
        <Ionicons name="search" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function ScreenB2({ route }) {
  const { itemId } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR - ITEM</Text>
      <Text style={styles.text}>Parametro recibido {itemId}</Text>
      <Text style={styles.description}>
        Segundo Stack - Segunda Screen
        {'\n\n'}
        * No hay boton para navegar (ver la barra):
        {'\n'}
      </Text>
      {/* <TouchableOpacity title="BUSCADOR" onPress={() => navigation.navigate('ScreenB1')} /> */}
    </View>
  );
}

//
// Screens del Tercer Stack
//
function ScreenC1() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL</Text>
      <Text style={styles.description}>
        Tercer Stack - Primer Screen
        {'\n\n'}
        * Se modifico la Barra, se centro, se puso un boton! (ver la barra):
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenC2')} style={styles.button}>IR A ScreenC2</TouchableOpacity>
    </View>
  );
}

function ScreenC2() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL - EDICION</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ScreenC1')} style={styles.button}>IR A ScreenC1</TouchableOpacity>
    </View>
  );
}

//
// Screens del Cuarto Stack
//
function ScreenD1() {
  const navigation = useNavigation();
  return (
    <View style={styles.creditosScreen}>
      <Text style={styles.text}>PERFIL</Text>
      <Text style={styles.description}>
        Cuarto Stack - Primer Screen
        {'\n\n'}
        * Se modifico la Barra, se centro, se puso un boton! (ver la barra):
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenD2')} style={styles.button}>IR A ScreenD2</TouchableOpacity>
    </View>
  );
}

function ScreenD2() {
  const navigation = useNavigation();
  return (
    <View style={styles.creditosScreen}>
      <Text style={styles.text}>PERFIL</Text>
      <Text style={styles.description}>
        Cuarto Stack - Segunda Screen
        {'\n\n'}
        * Se modifico la Barra, se centro, se puso un boton! (ver la barra):
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenD1')} style={styles.button}>IR A ScreenD1</TouchableOpacity>
    </View>
  );
}

//
// Creación de los stacks
//
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="Home1" component={Home1} />
      <StackA.Screen name="Home2" component={Home2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen
        name="ScreenC1"
        component={ScreenC1}
        options={{
          //title: Cambia el título que aparece en el encabezado de la pantalla.
          title: 'Otro Titulo',
          //headerStyle: Personaliza el estilo del encabezado, como el color de fondo.
          headerStyle: { backgroundColor: 'purple' },
          //headerTintColor: Cambia el color del texto y los íconos del encabezado.
          headerTintColor: '#fff',
          //headerTitleStyle: Cambia el estilo del título del encabezado, como la fuente y el tamaño del texto.
          headerTitleStyle: { fontWeight: 'bold' },
          //headerTitleAlign: Alinea el título del encabezado al centro o a la izquierda.
          headerTitleAlign: 'center',
          //headerRight: Agrega un componente personalizado en la esquina superior derecha del encabezado.
          //headerLeft.. lo mismo
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Hice Click!!')}
              title="Info"
              color="#00cc00"
            />
          ),
          //headerTransparent: Hace que el encabezado sea transparente.
          headerTransparent: true
        }}
      />

      <StackC.Screen
        name="ScreenC2"
        component={ScreenC2}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: false
        }}
      />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen
        name="ScreenD1"
        component={ScreenD1}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: false
        }}
      />

      <StackD.Screen
        name="ScreenD2"
        component={ScreenD2}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: false
        }}
      />
    </StackD.Navigator>
  );
}

//
// Creación del BottomTabNavigator
//
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={StackBNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={StackCNavigator}
        options={{
          // title: 'Perfil', // Lo pone en todos! 
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
            // name = "person", "search", "home"
          ),
        }}
      />
      <Tab.Screen
        name="Créditos"
        component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//
// Envolviendo la aplicación en el NavigationContainer
//
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Fondo negro para contrastar el texto blanco
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  description: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#8E5DFB',
    borderRadius: 15,
    padding: 12,
    fontFamily: 'Arial',
    color: 'white'
  },

  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4fdff'
  },

  homeImage: {
    height: "195px",
    width: "132px"
  },
  searchScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c8ff'
  },
  perfilScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecc4ff'
  },
  creditosScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc4ed'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '90%',
    color: 'black',
  },
});