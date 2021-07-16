const initialState = {
    isLoading: false
}

type loadingACType = {
    type: 'LOADING'
    isLoading: boolean
}

export type InitialLoadingStateType = typeof initialState

export const newReducer = (state = initialState, action: loadingACType): InitialLoadingStateType => {
    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };

        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {type: 'LOADING', isLoading}
};