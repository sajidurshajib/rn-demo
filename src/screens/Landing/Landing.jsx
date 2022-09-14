import { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { githubGetUserInfo } from '../../api'
import { styles } from './Landing.style'

const Landing = () => {
    const [data, setData] = useState({ name: 'Jhon Doe' })
    const [search, setSearch] = useState('')

    const submit = () => {
        if (search.length === 0) {
            setData({ name: 'Jhon Doe' })
        } else {
            githubGetUserInfo(search)
                .then((dt) => setData(dt))
                .catch((err) => {})
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ backgroundColor: '#fff', padding: 5, width: '80%' }}
                value={search}
                onChangeText={setSearch}
                placeholder="github username"
            />
            <Button title="Search" onPress={submit} />
            <Text style={styles.greet}>{data?.name}</Text>
        </View>
    )
}

export default Landing
