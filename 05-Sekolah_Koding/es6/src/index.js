// * Ini adalah Spread dan Rest

signIn = (username, password, umur) => {
    console.log(username + ' password ' + password + ' umur ' + umur)
}

let data = ['imotd', '123', '25']

signIn(...data)