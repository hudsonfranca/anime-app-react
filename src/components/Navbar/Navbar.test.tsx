import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import { Navbar } from '.';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

describe('<Navbar/> redering', () => {
  it('Should render without errors', () => {
    const wrappe = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      )
      .toJSON();

    expect(wrappe).toMatchSnapshot();
  });

  it('should render 1 Container', () => {
    expect(wrapper.find(`[data-test='containerNavbar']`).length).toEqual(2);
  });

  it('should render 1 Logo', () => {
    expect(wrapper.find(`[data-test='logo']`)).toHaveLength(2);
  });

  it('should render 1 Logo Icon', () => {
    expect(wrapper.find(`[data-test='logoIcon']`)).toHaveLength(2);
  });

  it('should render 1 search button', () => {
    expect(wrapper.find(`[data-test='search-button']`)).toHaveLength(2);
  });

  it('should render 1 Search input', () => {
    expect(wrapper.find(`[data-test='search-input']`)).toHaveLength(2);
  });

  it('should render 2 Menu', () => {
    expect(wrapper.find(`[data-test='menu']`)).toHaveLength(2);
  });

  it('should render 1 hamburguer button', () => {
    expect(wrapper.find(`[data-test='hamburguer-button']`)).toHaveLength(2);
  });
  it('should render 1 login logout component', () => {
    expect(wrapper.find(`[data-test='login-logout']`)).toHaveLength(2);
  });
});
