import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import EDashComponent, {IEDashProps} from '../EmployeeDashComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IEDashProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'}  
}

describe('<EDashComponent />', () => {

    let wrapper = mount(<BrowserRouter><EDashComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});