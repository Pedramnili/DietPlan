export const arrowDown = (data) => {
    return {
        type: 'BTN_ARROW_DOWN',
        payload: data
    }
};

export const arrowLeft = (data) => {
    return {
        type: 'BTN_ARROW_LEFT',
        payload: data
    }
};

export const arrowRight = (data) => {
    return {
        type: 'BTN_ARROW_RIGHT',
        payload: data
    }
};

export const foodSuggestion = (data) => {
    return {
        type: 'FOOD_SUGGESTION',
        payload: data
    }
};

export const listFood = (data) => {
    return {
        type: 'GET_LIST_FOOD',
        payload: data
    }
};

export const modal = (data) => {
    return {
        type: 'OPEN_MODAL',
        payload: data
    }
};

export const modalS = (data) => {
    return {
        type: 'OPEN_MODAL_SUGGESTION',
        payload: data
    }
};