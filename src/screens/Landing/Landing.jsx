import { View, Text } from 'react-native'
import { styles } from './Landing.style'

const Landing = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greet}>This is Landing Screen...</Text>
        </View>
    )
}

export default Landing
