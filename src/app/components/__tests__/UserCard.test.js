import React from 'react';
import UserCard from '../UserCard';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('UserCard component test', () => {

    const user = {
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
        display_name: "Jon Skeet",
        isFollowed: false,
        isBlocked: true
    };

    it('usercard with initial user', () => {
        const { getByText } = render(
            <Provider store={store}>
              <UserCard user={user} />
            </Provider>
          );
        
          expect(getByText(/Jon Skeet/i)).toBeInTheDocument();
    });

    it('usercard with initial user which is disabled is still visible', () => {
        const { getByText } = render(
            <Provider store={store}>
              <UserCard user={user} />
            </Provider>
          );
          const card = screen.getByText("Jon Skeet");
          expect(card).toBeVisible();
    });

    it('usercard with initial user shows more info on icon click', () => {
      const { getByText } = render(
          <Provider store={store}>
            <UserCard user={user} />
          </Provider>
        );
        fireEvent.click(screen.getByTestId("card-details"));

        expect(getByText(/Reading, United Kingdom/i)).toBeInTheDocument();
  });
});