const githubGetUserInfo = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.ok) {
            const data = await response.json()
            return data
        }
    } catch (err) {
        return err
    }
}

export { githubGetUserInfo }
