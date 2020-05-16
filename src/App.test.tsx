import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
import NavbarComponent from './components/NavbarComponent';

describe('<App />', () => {

  test('app renders', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });

  test('renders navbar', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(NavbarComponent)).toHaveLength(1)
  })

});
