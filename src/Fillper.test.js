import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Flipper from './Flipper';

it("renders without crashing", function() {
  render(<Flipper />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Flipper />);
  expect(asFragment()).toMatchSnapshot();
});

it("coin is not displayed on page load", function(){
  const {queryByAltText}=render(<Flipper/>);
  expect(queryByAltText("coin-img")).not.toBeInTheDocument();
});

it("adds coin image on click and adds to either heads or tails", function(){
  const {queryByAltText, getByText}=render(<Flipper/>);
  const flip=getByText("Flip Coin");
  fireEvent.click(flip);
  expect(queryByAltText("coin-img")).toBeInTheDocument();
  expect(getByText("Heads", {exact:false})).toHaveTextContent(1);
});
