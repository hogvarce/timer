import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Avatar from 'components/Avatar';

Enzyme.configure({ adapter: new Adapter() });

describe('Avatar', () => {
    it('should render Avatar component', () => {
        const component = shallow(<Avatar />);
        expect(component).toHaveLength(1);
    });
});
