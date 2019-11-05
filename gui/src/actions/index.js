//Action creator
import { BUILD_DRINK, RESET_INGREDIENTS, ORDER_DRINK } from './types';

export const buildDrink = (ingredientId, ingredientAmount) => {
    return {
        type: BUILD_DRINK,
        payload: { ingredientId: ingredientId, ingredientAmount: ingredientAmount }
    };
};

export const resetIngredients = () => {
    return {
        type: RESET_INGREDIENTS
    };
}

export const orderDrink = (numberSmoothies) => {
    return {
        type: ORDER_DRINK,
        payload: { numberSmoothies: numberSmoothies }
    }
}