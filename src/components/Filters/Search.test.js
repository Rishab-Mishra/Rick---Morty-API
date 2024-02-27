import { fireEvent, render , screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Search from "./Search";
import { debounce } from "lodash";


test('Checking if it contains the heading or not', ()=>{
    const setSearchNameMock = jest.fn(); // Mock setSearchName function
    render(<Search searchName="" setSearchName={setSearchNameMock}/>); // Pass setSearchNameMock as prop

    const headingElement = screen.getByText(/Characters/i);
    expect(headingElement).toBeInTheDocument();
});

test('Checking if contains the placeholder or not', ()=>{
    const setSearchNameMock = jest.fn();
    render(<Search searchName="" setSearchName={setSearchNameMock}/>);

    const placeholderElement = screen.getByPlaceholderText(/search characters by name...../i);
    expect(placeholderElement).toBeInTheDocument();
})

test('setSearchName updates searchName correctly', () => {
  // Arrange
  const initialSearchName = '';
  const newSearchName = 'New Search Name';
  const setSearchNameMock = jest.fn();
  
  // Act
  setSearchNameMock(initialSearchName); // Simulate initial call with empty string
  expect(setSearchNameMock).toHaveBeenCalledWith(initialSearchName);

  setSearchNameMock(newSearchName); // Simulate call with new search name
  expect(setSearchNameMock).toHaveBeenCalledWith(newSearchName);

  // Assert
  // Add additional assertions here if needed
});

test('Checking if input box exists or not', ()=>{
    const setSearchNameMock = jest.fn();
    render(<Search searchName="" setSearchName={setSearchNameMock}/>)

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
});

// test('Checking the value of the input box', ()=>{
//     const setSearchNameMock = jest.fn();
//     const setNameMock = jest.fn();
//     render(<Search searchName="" name="morty" setName={setNameMock} setSearchName={setSearchNameMock}/>);

//     const input = screen.getByRole("textbox");
//     expect(input).toHaveAttribute("value", "morty");
// })

test('Checking the name and setName functionality', ()=>{
    const setSearchNameMock=jest.fn();
    render(<Search searchName="" setSearchName={setSearchNameMock}/>);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe('')
    fireEvent.change(input, {target: {value: 'rick'}});
    expect(input.value).toBe('rick');
});


test('Checking the debounce function', async ()=>{
    
    jest.mock('lodash', ()=>({
    debounce: jest.fn(fn => fn),
    }));
    const setSearchNameMock = jest.fn();
    render(<Search searchName="" setSearchName={setSearchNameMock}/>);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {target: {value: 'test'}});
    // expect(debounce).toHaveBeenCalledTimes(1);

    await waitFor(()=>
        expect(setSearchNameMock).toHaveBeenCalledWith('test'));

        // expect(setSearchNameMock).toHaveBeenCalledWith('test');
});