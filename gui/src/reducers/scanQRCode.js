import {
    SCAN_QRCODE, SCANED_QRCODE, RESET_INGREDIENTS, GET_NUMDRINKPASSES, GET_NUMDRINKSORDERED,
    SET_RECOMMENDATIONSTATUS, GET_DRINKHISTORY
} from '../actions/types';


const INITIAL_STATE = {
    enableCamera: 0,
    userID: '',
    userName: '',
    numDrinkPasses: 0,
    recommendationStatus: 0,
    numDrinksOrdered: 0,
    drinkHistory: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SCAN_QRCODE:
            return {
                ...state,
                enableCamera: 1
            };
        case SCANED_QRCODE:
            return {...state,
                enableCamera: 0,
                userID: action.payload.userID,
                userName: action.payload.userName
            };
        case GET_NUMDRINKPASSES:
            return {
                ...state,
                numDrinkPasses: action.payload.numDrinkPasses
            };
        case GET_NUMDRINKSORDERED:
            return {
                ...state,
                numDrinksOrdered: parseInt(action.payload.numDrinksOrdered)
            }
        case SET_RECOMMENDATIONSTATUS:
            return {
                ...state,
                recommendationStatus: action.payload.recommendationStatus
            }
        case GET_DRINKHISTORY:
            //recommendationStatus = 2 date, i1, i2, i3
            //recommendationStatus = 4 i4, i5, i6
            let drinkArray = action.payload.drinkHistory;
            let result = [];
            if (action.payload.recommendationStatus === 2) {                
                for (let i = 0; i < action.payload.numDrinksOrdered; i++) {
                    result.push({
                        date: drinkArray[0][i], i1: parseInt(drinkArray[1][i]), i2: parseInt(drinkArray[2][i]), i3: parseInt(drinkArray[3][i]),
                        i4: 0, i5: 0, i6: 0
                    })
                }
            } else if (action.payload.recommendationStatus === 3) {
                result = state.drinkHistory;
                for (let i = 0; i < action.payload.numDrinksOrdered; i++) {
                    result[i]['i4'] = parseInt(drinkArray[0][i]);
                    result[i]['i5'] = parseInt(drinkArray[1][i]);
                    result[i]['i6'] = parseInt(drinkArray[2][i]);
                }
            }
            
            return {
                ...state,
                drinkHistory: result
            }
        case RESET_INGREDIENTS:
            return INITIAL_STATE;
        default:
            return state;
    };
};

