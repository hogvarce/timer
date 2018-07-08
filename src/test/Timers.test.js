import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Timers from 'components/Timers';

const middlewares = [];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Timers', () => {
    it('should render Header component', () => {
        const getState = {};
        const store = mockStore(getState);
        const component = shallow(<Provider store={store}><Timers /></Provider>);
        expect(component).toHaveLength(1);
    });
});
