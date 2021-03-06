import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from 'components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('should render Header component', () => {
        const component = shallow(<Header />);
        expect(component).toHaveLength(1);
    });
});
