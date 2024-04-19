import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react';


import SignIn from '../pages/SignIn'

// Rotas para o tipo de usuário "Admin"
import MenuAdmin from '../pages/Admin/MenuAdmin'
import CadastrosAdmin from '../pages/Admin/CadastrosAdmin'
import LoginAdmin from '../pages/Admin/LoginAdmin'
import LoginDafAdmin from '../pages/Admin/LoginDafAdmin'
import LoginDopAdmin from '../pages/Admin/LoginDopAdmin'
import LoginDticAdmin from '../pages/Admin/LoginDticAdmin'
import LoginResidentesAdmin from '../pages/Admin/LoginResidentesAdmin'
import CadAdmin from '../pages/Admin/CadAdmin'
import CadDafAdmin from '../pages/Admin/CadDafAdmin'
import CadDopAdmin from '../pages/Admin/CadDopAdmin'
import CadDticAdmin from '../pages/Admin/CadDticAdmin'
import CadResidentesAdmin from '../pages/Admin/CadResidentesAdmin'
import CriarCadastroAdmin from '../pages/Admin/CriarCadastroAdmin'
import EditAdmin from '../pages/Admin/EditAdmin'
import PerfilAdmin from '../pages/Admin/PerfilAdmin'

// Rotas para o tipo de usuário "Residente"
import MenuResidente from '../pages/Residente/MenuResidente'
import AbrirChamadoResidente from '../pages/Residente/AbrirChamadoResidente'
import MeusChamadosResidente from '../pages/Residente/MeusChamadosResidente'
import AvisosResidente from '../pages/Residente/AvisosResidente'
import NoticiaResidente from '../pages/Residente/NoticiaResidente'
import FinanceiroResidente from '../pages/Residente/FinanceiroResidente'
import ChamadoResidente from '../pages/Residente/ChamadoResidente'
import BoletoAnoResidente from '../pages/Residente/BoletoAnoResidente'
import BoletoMesResidente from '../pages/Residente/BoletoMesResidente'
import EnergiaResidente from '../pages/Residente/EnergiaResidente'
import Novembro from '../pages/Residente/BoletoMesResidente/novembro'

// Rotas para o tipo de usuário "Dtic"
import MenuDtic from '../pages/Dtic/MenuDtic'
import MeusChamadosDtic from '../pages/Dtic/MeusChamadosDtic'
import ChamadoDtic from '../pages/Dtic/ChamadoDtic'
import AvisosDtic from '../pages/Dtic/AvisosDtic'
import NoticiaDtic from '../pages/Dtic/NoticiaDtic'

// Rotas para o tipo de usuário "Daf"
import MenuDaf from '../pages/Daf/MenuDaf'
import MeusChamadosDaf from '../pages/Daf/MeusChamadosDaf'
import ChamadoDaf from '../pages/Daf/ChamadoDaf'
import AvisosDaf from '../pages/Daf/AvisosDaf'
import NoticiaDaf from '../pages/Daf/NoticiaDaf'
import ResidentesDaf from '../pages/Daf/ResidentesDaf'
import BoletoAnoDaf from '../pages/Daf/BoletoAnoDaf'
import BoletoMesDaf from '../pages/Daf/BoletoMesDaf'

// Rotas para o tipo de usuário "Dop"
import MenuDop from '../pages/Dop/MenuDop'
import MeusChamadosDop from '../pages/Dop/MeusChamadosDop'
import ChamadoDop from '../pages/Dop/ChamadoDop'
import AvisosDop from '../pages/Dop/AvisosDop'
import NoticiaDop from '../pages/Dop/NoticiaDop'

const Stack = createNativeStackNavigator();

export default function Routes() {
  // Simula o tipo de usuário (pode ser removido quando usar o AuthContext)
  const userType = 'admin';

  let userRoutes;

  switch (userType) {
    case 'admin':
      userRoutes = (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MenuAdmin"
            component={MenuAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastrosAdmin"
            component={CadastrosAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginAdmin"
            component={LoginAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginDafAdmin"
            component={LoginDafAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginDopAdmin"
            component={LoginDopAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginDticAdmin"
            component={LoginDticAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginResidentesAdmin"
            component={LoginResidentesAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CadAdmin"
            component={CadAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CadDafAdmin"
            component={CadDafAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CadDopAdmin"
            component={CadDopAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CadDticAdmin"
            component={CadDticAdmin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CadResidentesAdmin"
            component={CadResidentesAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CriarCadastroAdmin"
            component={CriarCadastroAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditAdmin"
            component={EditAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilAdmin"
            component={PerfilAdmin}
            options={{ headerShown: false }}
          />
        </>
      );
      break;
    case 'residente':
      userRoutes = (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MenuResidente"
            component={MenuResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AbrirChamadoResidente"
            component={AbrirChamadoResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MeusChamadosResidente"
            component={MeusChamadosResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AvisosResidente"
            component={AvisosResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NoticiaResidente"
            component={NoticiaResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="FinanceiroResidente"
            component={FinanceiroResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChamadoResidente"
            component={ChamadoResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BoletoAnoResidente"
            component={BoletoAnoResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BoletoMesResidente"
            component={BoletoMesResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="EnergiaResidente"
            component={EnergiaResidente}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Novembro"
            component={Novembro}
            options={{ headerShown: false }}
          />
        </>
      );
      break;
    case 'dtic':
      userRoutes = (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MenuDtic"
            component={MenuDtic}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MeusChamadosDtic"
            component={MeusChamadosDtic}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChamadoDtic"
            component={ChamadoDtic}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AvisosDtic"
            component={AvisosDtic}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NoticiaDtic"
            component={NoticiaDtic}
            options={{ headerShown: false }}
          />
        </>
      );
      break;
    case 'daf':
      userRoutes = (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MenuDaf"
            component={MenuDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MeusChamadosDaf"
            component={MeusChamadosDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChamadoDaf"
            component={ChamadoDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AvisosDaf"
            component={AvisosDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NoticiaDaf"
            component={NoticiaDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ResidentesDaf"
            component={ResidentesDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BoletoAnoDaf"
            component={BoletoAnoDaf}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BoletoMesDaf"
            component={BoletoMesDaf}
            options={{ headerShown: false }}
          />

        </>
      );
      break;
    case 'dop':
      userRoutes = (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MenuDop"
            component={MenuDop}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MeusChamadosDop"
            component={MeusChamadosDop}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChamadoDop"
            component={ChamadoDop}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AvisosDop"
            component={AvisosDop}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NoticiaDop"
            component={NoticiaDop}
            options={{ headerShown: false }}
          />

        </>
      );
      break;
    default:
      userRoutes = <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />;
  }

  return (
    <Stack.Navigator>
      {userRoutes}
    </Stack.Navigator>
  );
}
