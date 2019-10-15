import React from 'react';
import Overview from '../client/Overview';
import { shallow, render, mount } from 'enzyme';


describe('Overview', () => {
  it("should render Overview component", () => {
    const wrapper = shallow(<Overview />)
    expect(wrapper.exists()).toBe(true)
  });
})

// describe('Overview', () => {
//   it("should render Overview component", () => {
//     const wrapper = shallow(<Overview />)
//     expect(wrapper.find(".overview").text()).toEqual('Overall ratings and reviews')
//   });
// })