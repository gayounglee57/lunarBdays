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
		fontSize: 30,
		padding: 2,
	},
	button:{
		backgroundColor: 'rgb(150,150,150)',
		padding: 10,
		marginTop: 15,
		width: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textLabel:{
		color: 'white',
		fontSize: 21,
		fontFamily: 'Arial',
	},
	flatList: {
        flex: 1,
        flexDirection: 'column',
    },
})

export default styles