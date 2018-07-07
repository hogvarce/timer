import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import iconSetting from 'static/icon_settings.svg';
import alarm_delete from 'static/ic-timerdelete.png';
import Timer from 'easytimer.js';
import styles from './TimerItem.css';

export default class TimerItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        timeLeft: PropTypes.number.isRequired,
        background: PropTypes.shape({}),
        index: PropTypes.number.isRequired,
    };

    static defaultProps = {
        name: '',
    };

    hours = React.createRef();
    minutes = React.createRef();
    seconds = React.createRef();

    state = {
        settingsIsOpen: false,
        showDelete: false,
        showReset: false,
        timer: new Timer(),
        isPaused: false,
    };

    componentWillMount() {
        const { timer } = this.state;
        timer.start({countdown: true, startValues: {seconds: this.props.timeLeft / 1000 }});
        timer.addEventListener('secondsUpdated', this.timeUpdate);
        timer.addEventListener('targetAchieved', this.hadleShowResetModal);
    }

    timeUpdate = () => {
        if (!this.hours.current || !this.minutes.current || !this.seconds.current) {
            return;
        }
        this.hours.current.innerHTML = this.state.timer.getTimeValues().hours;
        this.minutes.current.innerHTML = `:${this.state.timer.getTimeValues().minutes}`;
        this.seconds.current.innerHTML = `:${this.state.timer.getTimeValues().seconds}`;
    };

    onToggleSettings = () => {
        this.setState({
            settingsIsOpen: !this.state.settingsIsOpen,
        });
    };

    handleShow = () => {
        this.setState({ showDelete: true });
    };

    handleClose = () => {
        this.setState({ showDelete: false });
    };

    hadleShowResetModal =() => {
        this.setState({ showReset: true });
    };

    hadleCloseResetModal =() => {
        this.setState({ showReset: false });
    };

    onDelete = () => {
        const { id, deleteTimer } = this.props;
        deleteTimer(id);
        this.handleClose();
    };

    resetTimer = () => {
        this.state.timer.reset();
        this.hadleCloseResetModal();
        this.setState({
            settingsIsOpen: false,
        });
    };

    stopTimer = () => {
        this.state.timer.pause();
        this.setState({
            isPaused: true,
        });
    };

    startTimer = () => {
        this.state.timer.start();
        this.setState({
            isPaused: false,
        });
    };

    render() {
        const { name, styleDiv, index } = this.props;
        const { settingsIsOpen, isPaused } = this.state;
        const settingsClass = classNames({
            [styles.settings_hidden]: !settingsIsOpen,
            [styles.settings]: settingsIsOpen,
        });
        return(
            <div className={styles.root} style={styleDiv}>
                <div className={styles.timer}>
                    <div className={styles.hours} ref={this.hours} />
                    <div className={styles.minutes} ref={this.minutes} />
                    <div className={styles.seconds} ref={this.seconds} />
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.index}>Timer{index}</div>
                <div className={styles.clear} />
                <div className={settingsClass}>
                    <div className={styles.reset} onClick={this.resetTimer}>Reset Timer</div>
                    <div className={styles.delete} onClick={this.handleShow}>Delete Timer</div>
                </div>
                <div className={styles.icon_setting} onClick={this.onToggleSettings}>
                    <img src={iconSetting} alt="settings" />
                </div>
                {isPaused
                    ? <div className={styles.stop} onClick={this.startTimer}>Start Timer</div>
                    : <div className={styles.stop} onClick={this.stopTimer}>Stop Timer</div>
                }
                <Modal show={this.state.showDelete} onHide={this.handleClose}>
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
                <Modal show={this.state.showReset} onHide={this.hadleCloseResetModal}>
                    <Modal.Body>
                        <img className={styles.alarm_delete} src={alarm_delete} alt="delete timer" />
                        <div className={styles.title_modal}>Delete Timer?</div>
                        <div className={styles.clear_modal} />
                        <div className={styles.submit}>
                            <div className={styles.cancel} onClick={this.resetTimer}>Reset</div>
                            <div className={styles.delete_timer} onClick={this.onDelete}>Delete</div>
                        </div>
                        <div className={styles.close} onClick={this.handleClose} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
