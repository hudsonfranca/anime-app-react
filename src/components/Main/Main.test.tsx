import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Main } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Main />);
});

describe('<Main/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<Main />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <Container>', () => {
    expect(wrapper.find(`[data-test='container']`)).toHaveLength(1);
  });
});
