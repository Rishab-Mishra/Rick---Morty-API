import {render , screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './Cards';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router and MemoryRouter



test('should render cards with data when result is present', ()=>{
    const results = [
        {
            id: 1,
            name: 'rishi',
            species: 'aadmi',
            status: 'intern',
            location: {name: 'gurgaon'}
        },
        {
            id: 2,
            name: 'harish',
            species: 'aadmi',
            status: 'SDE-2',
            location: {name: 'gurgaon'},
            gender: 'Male'
        }
    ];
    render(
        <Router>
            <Cards results={results}/>
        </Router>
    );
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(2);

     expect(screen.getByText('intern')).toBeInTheDocument();
     expect(screen.getByText(/sde-2/i)).toBeInTheDocument();
    });

test(`should render text "no data here" if result is null`, ()=>{
    const  results = null;

    render(
        <Router>
            <Cards results={results}/>
        </Router>
    );

    const text = screen.getByText(/no data here/i);
    expect(text).toBeInTheDocument();
});

test('Should render only 2 card components', ()=>{
    const results = [
        {
            id: 1,
            name: 'rishi',
            species: 'aadmi',
            status: 'dead',
            location: {name: 'gurgaon'}
        },
        {
            id: 2,
            name: 'harish',
            species: 'aadmi',
            status: 'dead',
            location: {name: 'gurgaon'},
            gender: 'Male'
        }
    ];
    render(
        <Router>
            <Cards results={results}/>
        </Router>
    );

    const divElement = screen.getAllByTestId("card");
    expect(divElement.length).toBe(2);
});

test('Checking the status of the card', ()=>{
    const results = [
        {
            id: 1,
            name: 'rishi',
            species: 'aadmi',
            status: 'Alive',
            location: {name: 'gurgaon'}
        },
        {
            id: 2,
            name: 'harish',
            species: 'aadmi',
            status: 'Alive',
            location: {name: 'gurgaon'},
            gender: 'Male'
        }
    ];
        render(
            <Router>
                <Cards results={results}/>
            </Router>
        );
    const badge = screen.getAllByTestId("badge-color");
    badge.forEach(badge => {
        expect(badge).toHaveClass("bg-success");
    });
})

