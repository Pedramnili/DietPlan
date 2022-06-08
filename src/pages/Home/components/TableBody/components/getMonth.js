export function getMonth() {

    const today = new Date()

    return today.toLocaleDateString('fa-IR', {month: 'numeric'})
        .replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728))
}