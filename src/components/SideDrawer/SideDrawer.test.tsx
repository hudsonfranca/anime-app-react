import React from 'react';
import SideDrawer from './SideDrawer';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow, ShallowWrapper } from 'enzyme';

let wraper: ShallowWrapper;

beforeEach(() => {
  wraper = shallow(<SideDrawer />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<SideDrawer/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<SideDrawer />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one container div', () => {
    expect(wraper.find(`[data-test='container']`).length).toBe(1);
  });

  it('Should render one HamburguerButton', () => {
    expect(wraper.find(`[data-test='hamburguer-button']`).length).toBe(1);
  });

  it('Should render one Menu', () => {
    expect(wraper.find(`[data-test='menu']`).length).toBe(1);
  });
});
