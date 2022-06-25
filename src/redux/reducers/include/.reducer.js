export function setArrowDown (state = true, action) {
    switch (action.type) {
        case "BTN_ARROW_DOWN" :
            return action.payload
        default:
            return state
    }
}

export function setArrowLeft (state = false, action) {
    switch (action.type) {
        case "BTN_ARROW_LEFT" :
            return action.payload
        default:
            return state
    }
}

export function setArrowRight (state = false, action) {
    switch (action.type) {
        case "BTN_ARROW_RIGHT" :
            return action.payload
        default:
            return state
    }
}

export function setFoodSuggestion (state = [], action) {
    switch (action.type) {
        case "FOOD_SUGGESTION" :
            return action.payload
        default:
            return state
    }
}

export function setListFood (state = [], action) {
    switch (action.type) {
        case "GET_LIST_FOOD" :
            return action.payload
        default:
            return state
    }
}

export function setModal (state = false, action) {
    switch (action.type) {
        case "OPEN_MODAL" :
            return action.payload
        default:
            return state
    }
}

export function setModalS (state = false, action) {
    switch (action.type) {
        case "OPEN_MODAL_SUGGESTION" :
            return action.payload
        default:
            return state
    }
}