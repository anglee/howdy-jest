import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const enzymeWrapper =
    shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  // Verify that it's Off by default
  expect(enzymeWrapper.text()).toEqual('Off');

  // Simulate a click and verify that it is now On
  enzymeWrapper.find('input[type="checkbox"]').simulate('change');
  expect(enzymeWrapper.text()).toEqual('On');
});