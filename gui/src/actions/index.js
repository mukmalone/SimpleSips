//Action creator
import { BUILD_DRINK, RESET_INGREDIENTS, ORDER_DRINK, SCAN_QRCODE, SCANED_QRCODE } from './types';

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

export const scanQRCode = () => {
    return {
        type: SCAN_QRCODE
    };
}

export const scanedQRCode = (userID, userName) => {
    return {
        type: SCANED_QRCODE,
        payload: { userID: userID, userName: userName }
    };
}