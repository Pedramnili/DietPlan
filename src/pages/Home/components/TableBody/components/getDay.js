export function getDay() {

    const today = new Date()

    return today.toLocaleDateString('fa-IR', {day: 'numeric'})
        .replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728))
}