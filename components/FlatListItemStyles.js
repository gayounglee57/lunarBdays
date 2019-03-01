import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        borderBottomWidth: 0.5, 
        borderColor: 'rgb(200,200,200)', 
        flex: 1, 
        flexDirection: 'row'
    },
    flatList: {
        fontFamily: 'Arial', 
        fontSize: 21, 
        paddingVertical: 20, 
        color: 'rgb(120,120,120)'
    },
    flatListName: {
        paddingLeft: 20,
        fontWeight: 'bold'
    },
    flatListDay: {
        paddingLeft: 10,
    }
  })

  export default styles