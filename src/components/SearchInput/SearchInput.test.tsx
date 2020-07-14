import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchInput } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<SearchInput />);
});

describe('<SearchInput /> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<SearchInput />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 search input container', () => {
    expect(wrapper.find(`[data-test='search-input-container']`)).toHaveLength(
      1
    );
  });

  it('should render 1 input ', () => {
    expect(wrapper.find(`[data-test='input']`)).toHaveLength(1);
  });

  it('should render 1 submit buttont ', () => {
    expect(wrapper.find(`[data-test='submit-button']`)).toHaveLength(1);
  });
});
