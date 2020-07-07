import React from 'react';
import HamburguerButton from './HamburguerButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow, ShallowWrapper } from 'enzyme';

const mockedHandleClickHbButton = jest.fn();

function createTestProps() {
  return {
    open: false,
    onClick: mockedHandleClickHbButton,
  };
}

let wraper: ShallowWrapper;

beforeEach(() => {
  const props = createTestProps();
  wraper = shallow(<HamburguerButton {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<HamburguerButton/> redering', () => {
  it('Should render without errors', () => {
    const props = createTestProps();
    const wrapper = renderer.create(<HamburguerButton {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one container div', () => {
    expect(wraper.find(`[data-test='container']`).length).toBe(1);
  });

  it('Should render three hamburguerLine div', () => {
    expect(wraper.find(`[data-test='hamburguerLine']`).length).toBe(3);
  });
});

describe('<HamburguerButton/> interactions', () => {
  it('Should call the oneClick function when the hamburguer button is clicked', () => {
    const hbButton = wraper.find(`[data-test='container']`);
    hbButton.simulate('click');
    expect(mockedHandleClickHbButton).toHaveBeenCalledTimes(1);
  });
});
