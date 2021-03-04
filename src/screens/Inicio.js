import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import formStyle from '../styles/styles.forms';
import { AntDesign } from '@expo/vector-icons';

/**
 * Todos los componentes de React son capaces de compartir sus propiedades por medio
 * de un parámetro en el incio de la funcion denominado props
 *
 * Dado que Inicio es parte de NavigationContainer tiene a su disposición
 * todos los elementos de navegacion dentro de su objeto de propiedades
 */
const Inicio = (props) => {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
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

			<View style={{backgroundColor: '#272727', height: 100, padding:30, alignItems:'flex-start', flex:0.4, alignContent:'center'}}>
				<Text
				style={{
					marginTop: 10,
					color: 'white',
					fontSize: 40,
					fontWeight: 'bold'
				}}
				>Bienvenido a la app de MultiSoft</Text>

				<Text
				style={{
					marginTop: 12,
					color: '#2384DA',
					fontSize: 17,
				}}
				>Comienza a tomar la temperatura de todos tus clientes</Text>
			</View>


			<View 
			style={{flex: 1,
			marginTop: 5,
			alignContent:'center',
			alignItems: 'center',
			width: '100%',
			paddingHorizontal: 20,
			backgroundColor: '#212121'
			}} >

				<TouchableOpacity
					style={{
						marginTop: 70,
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
					onPress={() => {
						props.navigation.navigate('Login');
					}}
				>
					<Text style={formStyle.estiloBotonText}>
						<AntDesign size={22} name='adduser' />
						{'  '}
						Inicia Sesión
					</Text>
				</TouchableOpacity>

				<Text style={{
					color: 'white'
				}}>
					Ó
				</Text>
			
			<TouchableOpacity
				style={{
					marginTop: 20,
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
				onPress={() => {
					props.navigation.navigate('Registro');
				}}
			>
				<Text style={formStyle.estiloBotonText}>
					<AntDesign size={22} name='form' />
					{'  '}
					Registrate
				</Text>
			</TouchableOpacity>
			</View>
			
		</View>
	);
};

export default Inicio;
