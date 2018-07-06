import { connect } from 'react-redux';

import * as TimersActions from 'actions/TimersActions';
import Timers from './Timers';

const mapStateToProps = (state) => {
    const { timers } = state;
    return {
        timers,
    };
};

const mapDispatchToProps = {
    getTimers: TimersActions.getTimers,
    addNewTimer: TimersActions.addNewTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timers);