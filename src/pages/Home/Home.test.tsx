import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Home } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('<Home/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<Home />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 search Home container', () => {
    expect(wrapper.find(`[data-test='home-container']`)).toHaveLength(1);
  });

  it('should render 1 latest episodes', () => {
    expect(wrapper.find(`[data-test='latest-episodes']`)).toHaveLength(1);
  });

  it('should render 1 pagination container', () => {
    expect(wrapper.find(`[data-test='pagination-container']`)).toHaveLength(1);
  });

  it('should render 1 pagination container', () => {
    expect(wrapper.find(`[data-test='pagination']`)).toHaveLength(1);
  });
});
