import { SCAN_QRCODE, SCANED_QRCODE, RESET_INGREDIENTS, GET_NUMDRINKPASSES } from '../actions/types';


const INITIAL_STATE = {
    enableCamera: 0,
    userID: '',
    userName: '',
    numDrinkPasses: 0
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
        case RESET_INGREDIENTS:
            return INITIAL_STATE;
        default:
            return state;
    };
};

