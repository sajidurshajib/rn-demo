import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Landing } from './src/screens'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Wake up Neo...!</Text>
            <StatusBar style="auto" />
            <Landing />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
