import React from 'react';
import SearchSideDrawer from './SearchSideDrawer';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow, ShallowWrapper } from 'enzyme';

let wraper: ShallowWrapper;

beforeEach(() => {
  wraper = shallow(<SearchSideDrawer />);
});

describe('<SearchSideDrawer/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<SearchSideDrawer />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one container div', () => {
    expect(wraper.find(`[data-test='container']`).length).toBe(1);
  });

  it('Should render one SearchInputContainer', () => {
    expect(wraper.find(`[data-test='search-input-container']`).length).toBe(1);
  });

  it('Should render one SearchInput', () => {
    expect(wraper.find(`[data-test='search-input']`).length).toBe(1);
  });

  it('Should render one ButtonsContainer', () => {
    expect(wraper.find(`[data-test='buttons-container']`).length).toBe(1);
  });

  it('Should render one ButtonCancel', () => {
    expect(wraper.find(`[data-test='button-cancel']`).length).toBe(1);
  });

  it('Should render one ButtonSubmit', () => {
    expect(wraper.find(`[data-test='button-submit']`).length).toBe(1);
  });

  it('Should render one SearchButton', () => {
    expect(wraper.find(`[data-test='search-button']`).length).toBe(1);
  });
});
