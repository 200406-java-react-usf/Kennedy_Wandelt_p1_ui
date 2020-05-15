import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import NewUserComponent, {IRegProps} from '../NewUserComponent';
import { User } from '../../models/user';
import { FormControl, Button } from '@material-ui/core';

const props: IRegProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
    newUser: undefined,
}

describe('<NewUserComponent />', () => {

    let wrapper = mount(<NewUserComponent {...props} /> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Renders 5 FormControl components', () => {
        expect(wrapper.find(FormControl)).toHaveLength(6);
    });

    it('Renders 6 input components', () => {
        expect(wrapper.find('input')).toHaveLength(5);
    });

    it('Renders a button', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});

describe('<NewUserComponent /> input fields value update', () => {
    let wrapper = mount(<NewUserComponent {...props} />)
    

    it('Triggering change on fn input updates value with event payload', () => {
        wrapper.find('input#firstname').simulate('change', {
            target: {value: 'newfn'}
        });
        expect(wrapper.find('input#firstname').prop('value')).toEqual('newfn');
    });

});

//white box testing - tests internl behavior  (cannot see from outside)
//blackbox testing - only tests input and output side affects 

// describe('state management', () => {

//     const setState = jest.fn();
//     const userStateMock: any = (init:any) => []
    
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     it('calls setState when #firstname  cahnged', () => {
//         jest.spyOn(React, 'useState').mockImplementation(userStateMock);

//         let wrapper = mount(<NewUserComponent {...props} />);

//         wrapper.find('input#firstname').simulate('change', {
//             target: { value: 'Abby'}
//         });

//         expect(wrapper).toBeCalledWith('Abby');
//     });

//     it('calls setstate when #lastName change', () => {
//         jest.spyOn(React, 'useState').mockImplementation(userStateMock);

//         let wrapper = mount(<NewUserComponent {...props} />);

//         wrapper.find('input#lastname').simulate('change', {
//             target: {value: 'Robertson'}
//         });

//         expect(wrapper).toBeCalledWith('Robertson');
//     });
// });