import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// import React from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// // import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

// global.React = React;
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;