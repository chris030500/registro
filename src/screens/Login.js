import React, { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Button,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import formStyle from '../styles/styles.forms';
import { AntDesign } from '@expo/vector-icons';

const Login = (props) => {
	/**
	 * Debido al renderizado del VDOM React no es capaz de modificar ninguna
	 * variable dentro de la UI, de ahí que existan los hook (Gancho) que permite
	 * actualizar una versión virtual de una constante por medio d euna función
	 * const [ _VALOR_ , _FN_MODIFICA_ ] = useState(_VALOR_INICIAL_);
	 */
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [btnVisible, setBtnVisible] = useState(true);
	const [aiVisible, setAiVisible] = useState(false);
	const [tiEnabled, setTiEnabled] = useState(true);

	/**
	 * Función que valida el contenido de login (no datos en blanco)
	 * y revisa si el usuario es 4422048329/raul.zavaletazea@uteq.edu.mx
	 * y la contraseña: 808080
	 */
	const validaLogin = () => {
		/**
		 * Invocamos una alerta
		 */

		//USERNAME DE MIN 5 CARACTERES
		if (username.length < 5) {
			Alert.alert('ERROR', 'Username inválido', [
				{
					text: 'Corregir',
					onPress: () => setUsername(''),
				},
			]);

			//Salimos de la función
			return;
		}

		if (password.length !== 6) {
			Alert.alert('ERROR', 'Password inválido', [
				{
					text: 'Corregir',
					onPress: () => setPassword(''),
				},
			]);

			return;
		}

		setBtnVisible(false);
		setAiVisible(true);
		setTiEnabled(false);

		setTimeout(() => {
			setBtnVisible(true);
			setAiVisible(false);
			setTiEnabled(true);
			//Direccionar a Home
			props.navigation.navigate('Home');
		}, 1500);
	};

	const muestraNombre = (nom) => {
		Alert.alert(
			//Titulo
			'Hola',
			//Mensaje
			`Que gusto verte ${nom}`,
			//Arreglo de botones (Android MAX 3, iOS ILIMITADO)
			[
				{
					text: 'B1',
					onPress: null,
				},
				{
					text: 'B2',
					onPress: null,
				},
				{
					text: 'B3',
					onPress: null,
				},
			],
			//Configuración
			{
				cancelable: false,
				onDismiss: () =>
					console.log('Alerta cerrada'),
			}
		);
	};

	return (
		<View style={{backgroundColor: '#272727', flex: 1}}>

			<View style={{backgroundColor: '#3B3B3B', height: 100, padding:30, alignItems:'flex-start', flex:0.2, alignContent:'center'}}>
				<Text
				style={{
					marginTop: 10,
					fontWeight: 'normal',
					color: 'white',
					fontSize: 50,
					shadowColor: 'white'
				}}>
					MultiSoft
					<AntDesign size={22} name='earth' />
						{'  '}
				</Text>
			</View>
			<Image
				source={require('./../../assets/images/login-2.png')}
				style={{
					width: 150,
					height: 150,
					marginTop: 40,
					alignSelf: 'center',
					resizeMode: 'center',
					marginVertical: 20,
					marginBottom: 40,
					backgroundColor: 'white',
					borderRadius: 1000,
				}}
			/>
			<TextInput
				placeholder='Correo'
				placeholderTextColor= 'white'
				color='white'
				keyboardType='email-address'
				style={formStyle.input}
				maxLength={50}
				autoCapitalize='none'
				autoCorrect={false}
				onChangeText={(val) => setUsername(val)}
				value={username}
				editable={tiEnabled}
			/>

			<TextInput
				placeholder='Contraseña'
				placeholderTextColor= 'white'
				color= 'white'
				keyboardType='default'
				style={formStyle.input}
				maxLength={6}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
				onChangeText={(val) => setPassword(val)}
				value={password}
				editable={tiEnabled}
			/>

			<ActivityIndicator
				color='#000'
				size='large'
				style={{
					marginVertical: 15,
					display: aiVisible ? 'flex' : 'none',
				}}
			/>
			
			<View 
			style={{flex: 1,
			marginTop: 5,
			alignContent:'center',
			alignItems: 'center',
			width: '100%',
			paddingHorizontal: 20,
			}} >

				<TouchableOpacity
					style={{
						marginTop: 30,
						marginBottom: 20,
						width: '100%',
						paddingHorizontal: 30,
						paddingVertical: 30,
						backgroundColor: '#2384DA',
						shadowColor: 'white',
						shadowOpacity: 0.8,
						borderRadius: 5,
						shadowRadius: 5,
						shadowOffset: {
							height: 1,
							width: 1}
					}}
					onPress={validaLogin}
				>
					<Text style={formStyle.estiloBotonText}>
						<AntDesign size={22} name='adduser' />
						{'  '}
						Iniciar Sesión
					</Text>
				</TouchableOpacity>

				<Button
					title='¿Aun no tienes cuenta? Registrate'
					color='white'
					/**
					 * Si la función dentro de la constante no tiene parámetors
					 * se puede invocar sin arrow function, pero si la función
					 * tiene parámetros debes englobarla (encapsularla) dentro de
					 * una arrow function
					 */
					onPress={() => {
						props.navigation.navigate('Registro');
					}}
				/>
			
				</View>
		</View>
	);
};

export default Login;
