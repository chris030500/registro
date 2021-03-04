import React, { Component } from 'react';
import {
	ActivityIndicator,
	Alert,
	Button,
	Image,
	ScrollView,
	Text,
	TextInput,
	View,
} from 'react-native';
import estilos from './../styles/styles.forms';
import firebase from './../database/firebase';
import { AntDesign } from '@expo/vector-icons';

export default class Registro extends Component {
	/**
	 * Desde una clase podemos acceder a las porpiedades y al estado
	 * desde el constructory se invocan utilizando la palabra this
	 */
	constructor(props) {
		super(props);

		/**
		 * Las variables de estado tambien se aplican desde el constructor
		 * dentro de una propiedad de tipo objeto reservada con el nombre
		 * de state, de igual manera accedemos a ella por medio del selector
		 * this
		 *
		 * this.state = {clave : valor};
		 */
		this.state = {
			nombre: '',
			apellido1: '',
			apellido2: '',
			fechaNacimiento: '',
			telefono: '',
			email: '',
			pin: '',
			terminos: false,
			aiVisible: false,
			btnVisible: true,
		};
	}

	/**
	 * Para crear un metodo en una clase de JS-ES6 solo debemos identificar su nombre
	 * (con las misma reglas de una función) y agregar sus parámetros identico a crear
	 * una función, PERO SIN LA PALABRA FUNCTION
	 */

	/**
	 * @deprecated Metodo que valida el formulario
	 * @param {*} state
	 */
	validaRegistro(state) {
		Alert.alert(`Hola ${this.state.nombre}`);
	}

	render() {
		/**
		 * Función que valida el formluario
		 */
		const validaRegistro = () => {
			if (this.state.nombre.length < 3) {
				Alert.alert(
					'ERROR',
					'Nombre incorrecto',
					[
						{
							text: 'Corregir',
							onPress: () => {
								this.setState({
									nombre: '',
								});
							},
						},
					],
					{ cancelable: false }
				);

				return;
			}

			if (this.state.apellido1.length < 3) {
				Alert.alert(
					'ERROR',
					'Apellido 1 incorrecto',
					[
						{
							text: 'Corregir',
							onPress: () => {
								this.setState({
									apellido1: '',
								});
							},
						},
					],
					{ cancelable: false }
				);

				return;
			}

			if (
				this.state.apellido2.length > 0 &&
				this.state.apellido2.length < 3
			) {
				Alert.alert(
					'ERROR',
					'Apellido 2 incorrecto',
					[
						{
							text: 'Corregir',
							onPress: () => {
								this.setState({
									apellido2: '',
								});
							},
						},
					],
					{ cancelable: false }
				);

				return;
			}

			/**
			 * Si pasamos todas las validaciones, llegaremos
			 * aquí
			 */
			this.setState({ aiVisible: true });
			this.setState({ btnVisible: false });
			this.setState({
				aiVisible: true,
				btnVisible: false,
			});
        };
        
            const crearUsuarioFS = async () =>{
                try{
                    const usuarioFS = await firebase.db
                    .collection('users')
                    .add({  
                        nombre: this.state.nombre,
                        apellido1: this.state.apellido1,
                        apellido2: this.state.apellido2,
                        fechaNacimiento: this.state.fechaNacimiento,
                        telefono: this.state.telefono,
                        email: this.state.email,
                        contraseña: this.state.pin,
                    });
                console.log("Usuario Insertado");
                } catch (e){
                    console.warn(e);
                }
            };

		return (
			<View style={{backgroundColor: '#272727', flex: 1}}>

			<View style={{backgroundColor: '#3B3B3B', height: 100, padding:30, alignItems:'flex-start', flex:0.3, alignContent:'center'}}>
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
				source={require('./../../assets/images/registro.png')}
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

				<View style={estilos.row}>
                <View
						style={[
							estilos.col,
							estilos.derecha,
						]}
					>
						<TextInput
					placeholder='*Nombre'
					placeholderTextColor= 'white'
					keyboardType='default'
					style={estilos.input}
					value={this.state.nombre}
					onChangeText={(val) => {
						this.setState({ nombre: val });
					}}
				/>
					</View>

					<View
						style={[
							estilos.col,
							estilos.derecha,
						]}
					>
						<TextInput
							placeholder='*Apellido 1'
							placeholderTextColor= 'white'
							keyboardType='default'
							style={estilos.input}
							value={this.state.apellido1}
							onChangeText={(val) => {
								this.setState({
									apellido1: val,
								});
							}}
						/>
					</View>

					<View
						style={[
							estilos.col,
							estilos.izquierda,
						]}
					>
						<TextInput
							placeholder='*Apellido 2'
							placeholderTextColor= 'white'
							keyboardType='default'
							style={estilos.input}
							value={this.state.apellido2}
							onChangeText={(val) => {
								this.setState({
									apellido2: val,
								});
							}}
						/>
					</View>
				</View>

                <View style={estilos.row}>

					<View
						style={[
							estilos.col,
							estilos.derecha,
						]}
					>
						<TextInput
							placeholder='*Fecha de Nacimiento'
							placeholderTextColor= 'white'
							keyboardType='default'
							style={estilos.input}
							value={this.state.fechaNacimiento}
							onChangeText={(val) => {
								this.setState({
									fechaNacimiento: val,
								});
							}}
						/>
					</View>

					<View
						style={[
							estilos.col,
							estilos.izquierda,
						]}
					>
						<TextInput
							placeholder='Telefono'
							placeholderTextColor= 'white'
							keyboardType='phone-pad'
							style={estilos.input}
							value={this.state.telefono}
							onChangeText={(val) => {
								this.setState({
									telefono: val,
								});
							}}
						/>
					</View>
				</View>

                <View style={estilos.row}>

					<View
						style={[
							estilos.col,
							estilos.derecha,
						]}
					>
						<TextInput
							placeholder='*Email'
							placeholderTextColor= 'white'
							keyboardType='email-address'
							style={estilos.input}
							value={this.state.email}
							onChangeText={(val) => {
								this.setState({
									email: val,
								});
							}}
						/>
					</View>

					<View
						style={[
							estilos.col,
							estilos.izquierda,
						]}
					>
						<TextInput
							placeholder='*Contraseña'
							placeholderTextColor= 'white'
                            keyboardType='default'
                            secureTextEntry={true}
							style={estilos.input}
							value={this.state.pin}
							onChangeText={(val) => {
								this.setState({
									pin: val,
								});
							}}
						/>
					</View>
				</View>

				<View
					style={{
						display: this.state.btnVisible
							? 'flex'
							: 'none',
					}}
				>
					<Button
						title='Registrarse'
						onPress={crearUsuarioFS}
					/>
				</View>

				<Button
					title='¿Ta tienes una cuenta?, inicia sesión aquí'
					onPress={() => {
						this.props.navigation.navigate(
							'Login'
						);
					}}
				/>
			</View>
		);
	}
}
