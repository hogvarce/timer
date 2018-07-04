import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Avatar from 'components/Avatar';
import Currencies from 'components/Currencies';

const Header = () => (
    <Grid>
        <Row>
            <Col md={3}>
                <Avatar />
            </Col>
            <Col md={5}  mdOffset={4}>
                <Currencies />
            </Col>
        </Row>
    </Grid>
);

export default Header;