import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Paginate from './Paginate';
import '@testing-library/jest-dom';


describe('Paginate component', () => {
  it('should call updatePageNumber with the correct page number when page is changed', () => {
    const pageNumber = 1;
    const info = { pages: 5 }; // Example info object
    const updatePageNumber = jest.fn(); // Mock updatePageNumber function

    render(
      <Paginate pageNumber={pageNumber} info={info} updatePageNumber={updatePageNumber} />
    );

    // Click on the next page button
    fireEvent.click(screen.getByText('Next'));

    // Expect updatePageNumber to be called with the correct page number
    expect(updatePageNumber).toHaveBeenCalledWith(2);
  });

  // You can add more test cases for other scenarios as needed

it('should render correct pagination buttons based on current page number', () => {
    const pageNumber = 3; // Example current page number
    const info = { pages: 5 }; // Example info object
    const updatePageNumber = jest.fn(); // Mock updatePageNumber function

    render(
      <Paginate pageNumber={pageNumber} info={info} updatePageNumber={updatePageNumber} />
    );

    // Debug logging to understand the DOM structure

    // Use more specific queries
    const prevButtons = screen.queryAllByText('Prev');
    const nextButtons = screen.queryAllByText('Next');

    // Assertions for "Prev" button
    expect(prevButtons.length).toBe(pageNumber > 1 ? 1 : 0);

    // Assertions for "Next" button
    expect(nextButtons.length).toBe(pageNumber < info.pages ? 1 : 0);
  });

});
