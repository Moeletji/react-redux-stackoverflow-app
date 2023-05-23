import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import StackoverflowSlice from "../features/stackoverflow/StackoverflowSlice";
// As a basic setup, import your same slice reducers

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const soReducer = (state = { users: [{
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
}], loading: false, errors: ""}) => {
    return state;
}

const initialState = { users: [{
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
}], loading: false, errors: ""}

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = mockStore(initialState)/*configureStore({
      reducer: { soStore: soReducer },
      preloadedState,
    })*/,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}