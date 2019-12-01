//Action creator
import {
    BUILD_DRINK, RESET_INGREDIENTS, ORDER_DRINK, SCAN_QRCODE, SCANED_QRCODE, GET_NUMDRINKPASSES,
    GET_NUMDRINKSORDERED, SET_RECOMMENDATIONSTATUS, GET_DRINKHISTORY
} from './types';

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

export const getnumDrinkPasses = (numDrinkPasses) => {
    return {
        type: GET_NUMDRINKPASSES,
        payload: { numDrinkPasses: numDrinkPasses }
    }
}

export const getnumDrinksOrdered = (numDrinksOrdered) => {
    return {
        type: GET_NUMDRINKSORDERED,
        payload: { numDrinksOrdered: numDrinksOrdered }
    }
}

export const getDrinkHistory = (recommendationStatus, numDrinksOrdered, drinkHistory) => {
    return {
        type: GET_DRINKHISTORY,
        payload: { recommendationStatus: recommendationStatus,
            numDrinksOrdered: numDrinksOrdered,
            drinkHistory: drinkHistory
        }
    }
}

export const setRecommendationStatus = (setState) => {
    return {
        type: SET_RECOMMENDATIONSTATUS,
        payload: { recommendationStatus: setState }
    }
}