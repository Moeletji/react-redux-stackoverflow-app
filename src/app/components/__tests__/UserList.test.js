import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import UserList from '../UserList';

describe('UserLisr component test', () => {

    const users = [{
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
    },
    {
        badge_counts: {
            bronze: 779,
            silver: 639,
            gold: 57
        },
        account_id: 1165580,
        is_employee: false,
        last_modified_date: 1684163100,
        last_access_date: 1684150816,
        reputation_change_year: 12998,
        reputation_change_quarter: 3837,
        reputation_change_month: 1493,
        reputation_change_week: 558,
        reputation_change_day: 40,
        reputation: 1234574,
        creation_date: 1326311637,
        user_type: "registered",
        user_id: 1144035,
        location: "New York, United States",
        website_url: "http://www.data-miners.com",
        link: "https://stackoverflow.com/users/1144035/gordon-linoff",
        profile_image: "https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=256&d=identicon&r=PG",
        display_name: "Gordon Linoff"
    }];

    it('render usercard with initial user', () => {
        const { getByText } = render(
            <Provider store={store}>
              <UserList users={users} />
            </Provider>
          );
        
          expect(getByText(/Gordon Linoff/i)).toBeInTheDocument();
    });
});