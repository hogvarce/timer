import axios from 'axios';
import TimersConstants from 'constants/timers';

export function getTimers() {
    return (dispatch) => {
        axios.get(`http://5b3cc99595bf8d0014a1d6c4.mockapi.io/timers/`)
            .then(function (response) {
                dispatch(getTimersSuccess(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export function getTimersSuccess({ data }) {
    return {
        type: TimersConstants.GET_TIMERS_SUCCESS,
        payload: { data },
    }
}

export function addNewTimer() {
    return (dispatch) => {
        axios.get(`http://5b3cc99595bf8d0014a1d6c4.mockapi.io/timers/post`)
    };
}