//Action creator
import { BUILD_DRINK } from './types';

export const buildDrink = (ingredientId, ingredientAmount) => {
    return {
        type: BUILD_DRINK,
        payload: { ingredientId: ingredientId, ingredientAmount: ingredientAmount }
    };
};