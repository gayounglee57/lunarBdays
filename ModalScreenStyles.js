import {
	StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput:{
		height: 40,
		borderColor: 'white',
		borderWidth: 1,
		fontFamily: 'Arial',
		fontSize: 20,
		marginTop: 10,
		textAlign: 'right',
	},
	button:{
		backgroundColor: 'rgb(150,150,150)',
		padding: 5,
		marginTop: 15,
		width: 65,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textLabel:{
		color: 'white',
		fontSize: 16,
		fontFamily: 'Arial',
	},
	flatList: {
        flex: 1,
        flexDirection: 'column',
    },
})

export default styles