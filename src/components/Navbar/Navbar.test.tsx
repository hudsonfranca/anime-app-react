import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Navbar } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Navbar />);
});

describe('<Navbar/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer.create(<Navbar />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 Container', () => {
    expect(wrapper.find(`[data-test='container']`)).toHaveLength(1);
  });

  it('should render 1 Logo', () => {
    expect(wrapper.find(`[data-test='logo']`)).toHaveLength(1);
  });

  it('should render 1 Logo Icon', () => {
    expect(wrapper.find(`[data-test='logo-icon']`)).toHaveLength(1);
  });

  it('should render 1 search button', () => {
    expect(wrapper.find(`[data-test='search-button']`)).toHaveLength(1);
  });

  it('should render 1 Search input', () => {
    expect(wrapper.find(`[data-test='search-input']`)).toHaveLength(1);
  });

  it('should render 2 Menu', () => {
    expect(wrapper.find(`[data-test='menu']`)).toHaveLength(1);
  });

  it('should render 1 hamburguer button', () => {
    expect(wrapper.find(`[data-test='hamburguer-button']`)).toHaveLength(1);
  });
  it('should render 1 login logout component', () => {
    expect(wrapper.find(`[data-test='login-logout']`)).toHaveLength(1);
  });
});
