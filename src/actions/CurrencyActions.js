import axios from 'axios';
import CurrencyConstants, { access_key } from 'constants/currency';

export function getCurrency() {
    return (dispatch) => {
        axios.get(`http://data.fixer.io/api/latest?access_key=${access_key}`)
            .then(function (response) {
                dispatch(getCurrencySuccess(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export function getCurrencySuccess({ data }) {
    return {
        type: CurrencyConstants.GET_CURRENCY_SUCCESS,
        payload: { data },
    }
}