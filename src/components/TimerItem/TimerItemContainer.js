import { connect } from 'react-redux';

import * as TimersActions from 'actions/TimersActions';
import TimerItem from './TimerItem';

const mapDispatchToProps = {
    deleteTimer: TimersActions.deleteTimer,
};

export default connect(null, mapDispatchToProps)(TimerItem);