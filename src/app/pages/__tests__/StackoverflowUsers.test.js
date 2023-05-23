import { render } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { store } from '../../store/store';
import StackOverflowUsers from '../StackOverflowUsers';
import { Provider } from 'react-redux'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Stackoverflow Page component", () => {

    const initialState = {
        users: [{
            badge_counts: {
                bronze: 9166,
                silver: 9092,
                gold: 859
            },
            account_id: 11683,
            is_employee: false,
            last_modified_date: 1684489800,
            last_access_date: 1684612688,
            reputation_change_year: 26013,
            reputation_change_quarter: 8898,
            reputation_change_month: 3770,
            reputation_change_week: 1130,
            reputation_change_day: 60,
            reputation: 1403456,
            creation_date: 1222430705,
            user_type: "registered",
            user_id: 22656,
            accept_rate: 86,
            location: "Reading, United Kingdom",
            website_url: "http://csharpindepth.com",
            link: "https://stackoverflow.com/users/22656/jon-skeet",
            profile_image: "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
            display_name: "Jon Skeet"
        }],
        loading: false,
        errors: ""
    }

    it("required users are there on initial load", () => {
    
    const store = mockStore(initialState);

    const expectedPayload = initialState;
    const payload = store.getState();
    expect(payload).toEqual(expectedPayload);
   });

   it('loading message displayed', () => {
    const { getByText} = render(
        <Provider store={store}>
            <StackOverflowUsers />
        </Provider>
    )

    expect(getByText(/Loading.../i)).toBeInTheDocument();
   })
 });
