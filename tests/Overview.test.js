import Overview from '../client/Overview';

describe('Overview', () => {
  it("should render Overview component", () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.exists()).toBe(true)
  });

  it("should detect child component", () => {
    const wrapper = shallow(<Overview />);
    //console.log('wrapper', wrapper.debug())
    expect(wrapper.find('BarGraph').exists()).toBe(true)
  });

  it("should check if reviews exist in state", () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.state()).toHaveProperty('reviews')
  });

  it("should pass correct rating value to state after handleFilterClick method", () => {
    let id = 5
    const component = mount(<Overview />);
    component.instance().handleFilterClick(id)
    expect(component.state().idForBar).toBe(5)
  });

  it("should call componentDidMount once", () => {
    const componentDidMountSpy = jest.spyOn(Overview.prototype, 'componentDidMount');
    const wrapper = mount(<Overview />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

});
