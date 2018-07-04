import CurrencyConstants from 'constants/currency';

const initialState = {
    rates: {
        USD: 0,
        EUR: 0,
        RUB: 0,
    },
};

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case CurrencyConstants.GET_CURRENCY_SUCCESS: {
            const { data: { rates } } = action.payload;
            return {
                ...state,
                rates,
            };
        }
        default: {
            return state;
        }
    }
}