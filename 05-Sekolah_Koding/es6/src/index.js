// * Ini adalah Default Parameter

generateTitle = () => {
    return "ini parameter"
}


contoh1 = (title, tag = 'default') => {
    console.log(title + ' punya tag ' + tag)
}
contoh2 = (title, tag) => {
    tag = tag || 'default'
    console.log(title + ' punya tag ' + tag)
}
contoh3 = (title = generateTitle(), tag = "default") => {
    console.log(title + ' punya tag ' + tag)
}

contoh1("Belajar", "HTML")
contoh2("Belajar", "HTML")
contoh3()
