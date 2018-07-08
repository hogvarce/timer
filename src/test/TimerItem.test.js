import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TimerItem from 'components/TimerItem';

const middlewares = [];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('TimerItem', () => {
    it('should render Header component', () => {
        const getState = {};
        const store = mockStore(getState);
        const component = shallow(<Provider store={store}><TimerItem /></Provider>);
        expect(component).toHaveLength(1);
    });
});
