

const initialState = {
    count: 0,
    label: 'Hi'
}

export default function ReduxActions(state = initialState, action) {
    switch (action.type) {
        case "INCREASE" : return {
            count: state.count + 1
        }
        case "DECREASE" : return {
            count: state.count - 1
        }
        case "LabelChange" : return {
            label : 'Hello'
        }
        default: return state;
    }
}