import { createDrawerNavigator } from '@react-navigation/drawer';
import LeerScreen from '../screens/LeerScreen'
import { NavigationContainer } from '@react-navigation/native';
import GuardarScreen from '../screens/GuardarScreen';
import EliminarScreen from '../screens/EliminarScreen';
import EditarScreen from '../screens/EditarScreen';

const Drawer = createDrawerNavigator()

//DRAWER
function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Leer' component={LeerScreen} />
            <Drawer.Screen name='Guardar' component={GuardarScreen} />
            <Drawer.Screen name='Eliminar' component={EliminarScreen} />
            <Drawer.Screen name='Editar' component={EditarScreen} />
        </Drawer.Navigator>
    )
}

export function Navigator() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}
