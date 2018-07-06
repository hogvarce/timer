import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Timer from 'react-timer-component';
import Countdown from './components/Countdown';
import iconSetting from 'static/icon_settings.svg';
import styles from './TimerItem.css';

export default class TimerItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        timeLeft: PropTypes.number.isRequired,
        background: PropTypes.shape({}),
        index: PropTypes.number.isRequired,
    };

    state = {
        settingsIsOpen: false,
    };

    onToggleSettings = () => {
        this.setState({
            settingsIsOpen: !this.state.settingsIsOpen,
        });
    };

    render() {
        const { name, timeLeft, styleDiv, index } = this.props;
        const { settingsIsOpen } = this.state;
        const settingsClass = classNames({
            [styles.settings_hidden]: !settingsIsOpen,
            [styles.settings]: settingsIsOpen,
        });
        return(
            <div className={styles.root} style={styleDiv}>
                <Timer remaining={timeLeft}>
                    <Countdown/>
                </Timer>
                <div className={styles.name}>{name}</div>
                <div className={styles.index}>Timer{index}</div>
                <div className={styles.clear} />
                <div className={settingsClass}>
                    <div className={styles.reset}>Reset Timer</div>
                    <div className={styles.delete}>Delete Timer</div>
                </div>
                <div className={styles.icon_setting} onClick={this.onToggleSettings}>
                    <img src={iconSetting} alt="settings" />
                </div>
                <div className={styles.stop}>Stop Timer</div>
            </div>
        );
    }
}
