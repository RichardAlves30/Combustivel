import react,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function app(){
	const[alccol, setAlcool]=useState("20");
	const[gasolina, setGasolina]=useState("3");
	const[resultado, setResultado]=useState();
	function dividir(){
		let resultado = parseFloat(alccol) + parseFloat(gasolina);
		setResultado(resultado);
		
		
		if (resultado >= 0.7){
           setResultado("Abasteca Gasolina" + resultado);
       }else{
           setResultado("Abasteca alcool" + resultado);
	   }

		
		
	}
	return(
	<View style={styles.container}>
		<View style={styles.bloco}>
			<Text style={styles.titulo}>Combustivel</Text>
		</View>
		<View style={styles.bloco}>
			<Text> Alcool </Text>
			<TextInput style={styles.input}
				value={alcool}
				onChangeText={(valor)=>setAlcool(valor)}
				keyBoardType="numeric"
				/>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 2: </Text>
			<TextInput style={styles.input}
				value={valor2}
				onChangeText={(valor)=>setGasolina(valor)}
				keyBoardType="numeric"
				/>
		</View>
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={dividir}
					>
					<Text style={styles.textoBotao}>DIVIDIR</Text>
				</TouchableOpacity>
		</View>
		<View style={styles.bloco}>
		<Text style={styles.titulo}>
				RESULTADO:{resultado}
			</Text>
		</View>
	</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2828b0'
  },
	bloco:{
		marginTop:20,
		width:'80%',
		marginLeft:'10%',
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:10
	},
	botao:{
		backgroundColor:'#000',
		borderRadius:10
	},
	textoBotao:{
		color:'#fff',
		textAlign:'center',
		fontSize:20
	},
	
});

