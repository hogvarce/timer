import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Currencies from 'components/Currencies';

const middlewares = [];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Currencies', () => {
    it('should render Currencies component', () => {
        const getState = {
            rates: {
                USD: 0,
                EUR: 0,
                RUB: 0,
            },
        };
        const store = mockStore(getState);
        const component = shallow(<Provider store={store}><Currencies /></Provider>);
        expect(component).toHaveLength(1);
    });
});
