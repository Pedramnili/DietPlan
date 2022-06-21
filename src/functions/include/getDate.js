export function getDate(dateForm, dateName, day , language) {

    const array = []

    for (let i = 0; i < day; i++) {

        const today = new Date()

        const tomorrow = new Date(today)

        tomorrow.setDate(today.getDate() + i)

        dateForm === 'numeric' ?

            array.push({
                [dateName]: tomorrow.toLocaleDateString(language, { [dateName] : dateForm})
                    .replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728))
            }) : array.push({[dateName]: tomorrow.toLocaleDateString(language, { [dateName] : dateForm})})
    }

    return array
}