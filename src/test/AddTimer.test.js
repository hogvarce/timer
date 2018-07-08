import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddTimer from 'components/AddTimer';

Enzyme.configure({ adapter: new Adapter() });

describe('AddTimer', () => {
    it('should render AddTimer component', () => {
        const component = shallow(<AddTimer />);
        expect(component).toHaveLength(1);
    });
});
