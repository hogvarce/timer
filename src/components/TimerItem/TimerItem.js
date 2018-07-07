import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Timer from 'react-timer-component';
import { Modal } from 'react-bootstrap';
import Countdown from './components/Countdown';
import iconSetting from 'static/icon_settings.svg';
import alarm_delete from 'static/ic-timerdelete.png';
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
        show: false,
    };

    onToggleSettings = () => {
        this.setState({
            settingsIsOpen: !this.state.settingsIsOpen,
        });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    onDelete = () => {
        const { id, deleteTimer } = this.props;
        deleteTimer(id);
        this.handleClose();
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
                    <div className={styles.delete} onClick={this.handleShow}>Delete Timer</div>
                </div>
                <div className={styles.icon_setting} onClick={this.onToggleSettings}>
                    <img src={iconSetting} alt="settings" />
                </div>
                <div className={styles.stop}>Stop Timer</div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <img className={styles.alarm_delete} src={alarm_delete} alt="delete timer" />
                        <div className={styles.title_modal}>Delete Timer?</div>
                        <div className={styles.clear_modal} />
                        <div className={styles.submit}>
                            <div className={styles.cancel} onClick={this.handleClose}>Cancel</div>
                            <div className={styles.delete_timer} onClick={this.onDelete}>Delete</div>
                        </div>
                        <div className={styles.close} onClick={this.handleClose} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
