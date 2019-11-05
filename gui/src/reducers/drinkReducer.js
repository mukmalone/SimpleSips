import { BUILD_DRINK, RESET_INGREDIENTS, ORDER_DRINK } from '../actions/types';

const INITIAL_STATE = {
    recipeTotal: 0,
    ingredientOne: 0, ingredientOneName: 'Strawberry',
    ingredientTwo: 0, ingredientTwoName: 'Kiwi',
    ingredientThree: 0, ingredientThreeName: 'Blueberry',
    ingredientFour: 0, ingredientFourName: 'Mango',
    ingredientFive: 0, ingredientFiveName: 'Banna',
    ingredientSix: 0, ingredientSixName: 'Blackberry',
    numberSmoothies: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_INGREDIENTS:
            return INITIAL_STATE;
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
        case ORDER_DRINK:
            return { ...state, numberSmoothies: action.payload.numberSmoothies };
        default:
            return state;
    };
};