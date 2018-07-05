import TimersConstants from 'constants/timers';

const initialState = JSON.parse(localStorage.getItem('timers')) || [];

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case TimersConstants.GET_TIMERS_SUCCESS: {
            const { data } = action.payload;
            localStorage.setItem('timers', JSON.stringify(data));
            return [
                ...data
            ];
        }
        default: {
            return state;
        }
    }
}