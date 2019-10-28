import { BUILD_DRINK } from '../actions/types';

const INITIAL_STATE = {
    recipeTotal: 0,
    ingredientOne: 0,
    ingredientTwo: 0,
    ingredientThree: 0,
    ingredientFour: 0,
    ingredientFive: 0,
    ingredientSix: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUILD_DRINK:
            let recipeTotal = 0;
            switch (action.payload.ingredientId) {
                case 'ingredientOne':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientTwo + state.ingredientThree + state.ingredientFour + state.ingredientFive + state.ingredientSix;
                    return { ...state, ingredientOne: action.payload.ingredientAmount, recipeTotal };
                case 'ingredientTwo':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientOne + state.ingredientThree + state.ingredientFour + state.ingredientFive + state.ingredientSix;
                    return { ...state, ingredientTwo: action.payload.ingredientAmount, recipeTotal };
                case 'ingredientThree':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientOne + state.ingredientTwo + state.ingredientFour + state.ingredientFive + state.ingredientSix;
                    return { ...state, ingredientThree: action.payload.ingredientAmount, recipeTotal };
                case 'ingredientFour':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientOne + state.ingredientTwo + state.ingredientThree + state.ingredientFive + state.ingredientSix;
                    return { ...state, ingredientFour: action.payload.ingredientAmount, recipeTotal };
                case 'ingredientFive':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientOne + state.ingredientTwo + state.ingredientThree + state.ingredientFour + state.ingredientSix;
                    return { ...state, ingredientFive: action.payload.ingredientAmount, recipeTotal };
                case 'ingredientSix':
                    recipeTotal = action.payload.ingredientAmount + state.ingredientOne + state.ingredientTwo + state.ingredientThree + state.ingredientFour + state.ingredientFive;
                    return { ...state, ingredientSix: action.payload.ingredientAmount, recipeTotal };
                default:
                    return state;
            };
        default:
            return state;
    };
};