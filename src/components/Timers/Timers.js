import React, { PureComponent } from 'react';
import { Grid, Col, Row, Modal, Form, FormControl } from 'react-bootstrap';
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
    };

    componentDidMount() {
        this.props.getTimers();
    }

    onAddTimer = () => {
        this.handleShow();
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
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
                        <AddTimer addNewTimer={this.onAddTimer}/>
                    </Col>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body>
                            <img className={styles.alarm_clock} src={alarm} alt="set timer" />
                            <div className={styles.title_modal}>Set the Timer</div>
                            <Form className={styles.form}>
                                <FormControl
                                    id="name"
                                    type="text"
                                    placeholder="Timer Name"
                                    bsSize="large"
                                    bsClass={styles.timer_name}
                                />
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Grid>
        );
    }
}

function setBackground(i) {
    if (!(i % 2)) {
        return { backgroundImage: `url(${gameThrone}` };
    }
    if (!(i % 3)) {
        return { background : 'linear-gradient(to left, #F2994A, #F2C94C)' };
    }
    if (!(i % 4)) {
        return { backgroundImage: `url(${sleeper}` };
    }
    return { backgroundImage: `url(${ripple}` };
}
