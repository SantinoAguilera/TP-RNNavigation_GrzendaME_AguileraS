import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import homeImage from './assets/home.avif';
import matiImage from './assets/matiImage.jpg';
import sasaImage from './assets/sasaImage.avif';
import profileImage from './assets/profileImage.jpg';

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
      <TextInput style={styles.input} placeholder="Ingresa tu nombre" onSubmitEditing={() => setText("Bienvenido a Home, " + event.nativeEvent.text + "!")}></TextInput>
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
      <TextInput style={styles.input} placeholder="Ingresa tu nombre" onSubmitEditing={() => setText("Bienvenido a Home 2, " + event.nativeEvent.text + "!")}></TextInput>
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
  const [text, setText] = useState("");
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR</Text>
      <TextInput style={styles.input} placeholder="Buscador" onSubmitEditing={() => setText("El buscador se encuentra en mantenimiento.")}></TextInput>
      <Text style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB2')} style={styles.button}>Buscar un buscador que ande</TouchableOpacity>
    </View>
  );
}

function ScreenB2() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR</Text>
      <TextInput style={styles.input} placeholder="Buscador" onSubmitEditing={() => setText("No es este.")}></TextInput>
      <Text style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB3')} style={styles.button}>Buscar un buscador que ande</TouchableOpacity>
    </View>
  );
}

function ScreenB3() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR</Text>
      <TextInput style={styles.input} placeholder="Buscador" onSubmitEditing={() => setText("Este tampoco.")}></TextInput>
      <Text style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB1')} style={styles.button}>Buscar un buscador que ande</TouchableOpacity>
    </View>
  );
}

//
// Screens del Tercer Stack
//
function ScreenC1() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, phone } = route.params || {};

  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL</Text>
      <Image source={profileImage} style={styles.homeImage}></Image>
      <Text style={styles.description}>
        Resumen de Perfil
        {'\n\n'}
        Nombre: {name}
        {'\n\n'}
        Teléfono: {phone}
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenC2')} style={styles.button}>CAMBIAR DATOS</TouchableOpacity>
    </View>
  );
}

function ScreenC2() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL - EDICION</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ScreenC1', { name: name, phone: phone })} style={styles.button}>Volver a perfil</TouchableOpacity>
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
      <Text style={styles.text}>CREDITOS</Text>
      <Text style={styles.description}>
        TP hecho por estas dos criaturas:
        {'\n\n'}
        <Image source={matiImage} style={styles.creditsImage}></Image>
        <Image source={sasaImage} style={styles.creditsImage}></Image>
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenD2')} style={styles.button}>IR A CREDITOS (creditos)</TouchableOpacity>
    </View>
  );
}

function ScreenD2() {
  const navigation = useNavigation();
  return (
    <View style={styles.creditosScreen}>
      <Text style={styles.text}>CREDITOS (creditos)</Text>
      <Text style={styles.description}>
        Creditos hechos por estas dos criaturas:
        {'\n\n'}
        <Image source={sasaImage} style={styles.creditsImage}></Image>
        <Image source={matiImage} style={styles.creditsImage}></Image>
        {'\n'}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenD1')} style={styles.button}>IR A CREDITOS</TouchableOpacity>
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
      <StackB.Screen name="ScreenB3" component={ScreenB3} />
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
          headerShown: true
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
          headerShown: true
        }}
      />

      <StackD.Screen
        name="ScreenD2"
        component={ScreenD2}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: true
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

  creditsImage: {
    height: "300px",
    width: "250px",
    margin: "10px"
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