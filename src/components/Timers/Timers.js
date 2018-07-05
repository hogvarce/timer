import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import TimerItem from 'components/TimerItem';
import gameThrone from 'static/game_throne.png'
import sleeper from 'static/sleeper.png';

export default class Timers extends PureComponent {
    componentDidMount() {
        this.props.getTimers();
    }
    render() {
        const { timers } = this.props;

        return(
            <Grid>
                <Row>
                    {timers.map((timer, i) => (
                        <Col md={4} key={timer.id}>
                            <TimerItem { ...timer } styleDiv={setBackground(i)} />
                        </Col>
                    ))}
                </Row>
            </Grid>
        );
    }
}

function setBackground(i) {
    switch (i) {
        case 1:
            return { backgroundImage: `url(${gameThrone}` };
        case 3:
            return { backgroundImage: `url(${sleeper}` };
        case 2:
            return { background : 'linear-gradient(to left, #F2994A, #F2C94C)' };
        default:
            return {};
    }
}
