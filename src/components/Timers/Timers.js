import React, { PureComponent } from 'react';
import { Grid, Col, Row, Modal, Form, FormControl, ControlLabel } from 'react-bootstrap';
import { get } from 'lodash';
import TimerItem from 'components/TimerItem';
import AddTimer from 'components/AddTimer';
import gameThrone from 'static/game_throne.png'
import sleeper from 'static/sleeper.png';
import ripple from 'static/ripple.png';
import alarm from 'static/alarm-clock.png';
import styles from  './Timers.css';

export default class Timers extends PureComponent {
    state = {
        show: false,
        timer: {
            name: null,
            timeLeft: 0,
        },
    };

    componentDidMount() {
        this.props.getTimers();
    }

    onAddTimer = () => {
        this.props.addNewTimer(this.state.timer);
        this.handleClose();
    };

    handleClose = () => {
        this.setState(state => ({
            show: false,
            timer: {
                ...state.timer,
                timeLeft: 0,
            }
        }));
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    handleTime = (id) => (e) => {
        let value = get(e, 'target.value');
        switch(id) {
            case 'hours': {
                value = value * 1000 * 60 * 60;
                break;
            }
            case 'minutes': {
                value = value * 1000 * 60;
                break;
            }
            case 'seconds': {
                value *= 1000;
                break;
            }
            default:
        }
        this.setState(({ timer }) => ({
                timer: {
                    ...timer,
                    timeLeft: timer.timeLeft + value,
                }
            }
        ));
    };

    handleName = (e) => {
        const name = get(e, 'target.value');
        this.setState(({ timer }) => ({
            timer: {
                ...timer,
                name,
            },
        }));
    };

    render() {
        const { timers } = this.props;

        return(
            <Grid>
                <Row>
                    {timers.map((timer, i) => (
                        <Col md={4} key={timer.id}>
                            <TimerItem { ...timer } styleDiv={setBackground(i + 1)} index={i + 1} />
                        </Col>
                    ))}
                    <Col  md={4}>
                        <AddTimer addNewTimer={this.handleShow}/>
                    </Col>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body>
                            <img className={styles.alarm_clock} src={alarm} alt="set timer" />
                            <div className={styles.title_modal}>Set the Timer</div>
                            <Form className={styles.form}>
                                <div className={styles.time}>
                                    <FormControl
                                        id="name"
                                        type="text"
                                        placeholder="Timer Name"
                                        bsSize="large"
                                        bsClass={styles.timer_name}
                                        onChange={this.handleName}
                                    />
                                </div>
                                <div className={styles.time}>
                                    <div className={styles.hours_block}>
                                        <FormControl
                                            id="hours"
                                            type="number"
                                            bsSize="large"
                                            bsClass={styles.hours}
                                            defaultValue="0"
                                            label="hours"
                                            onChange={this.handleTime('hours')}
                                        />
                                        <ControlLabel>HOURS</ControlLabel>
                                    </div>
                                    <div className={styles.minutes_block}>
                                        <FormControl
                                            id="minutes"
                                            type="number"
                                            bsSize="large"
                                            bsClass={styles.minutes}
                                            defaultValue="0"
                                            onChange={this.handleTime('minutes')}
                                        />
                                        <ControlLabel>MINUTES</ControlLabel>
                                    </div>
                                    <div className={styles.seconds_block}>
                                        <FormControl
                                            id="seconds"
                                            type="number"
                                            bsSize="large"
                                            bsClass={styles.seconds}
                                            defaultValue="0"
                                            onChange={this.handleTime('seconds')}
                                        />
                                        <ControlLabel>SECONDS</ControlLabel>
                                    </div>
                                </div>
                                <div className={styles.clear} />
                                <div className={styles.submit}>
                                    <div className={styles.cancel} onClick={this.handleClose}>Cancel</div>
                                    <div className={styles.apply} onClick={this.onAddTimer}>Add Timer</div>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Grid>
        );
    }
}

function setBackground(i) {
    if (!(i % 4)) {
        return { backgroundImage: `url(${sleeper}` };
    }
    if (!(i % 3)) {
        return { background : 'linear-gradient(to left, #F2994A, #F2C94C)' };
    }
    if (!(i % 2)) {
        return { backgroundImage: `url(${gameThrone}` };
    }
    return { backgroundImage: `url(${ripple}` };
}
