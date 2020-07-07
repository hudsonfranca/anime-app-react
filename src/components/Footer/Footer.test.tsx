import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Footer } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('<Footer/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<Footer />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
