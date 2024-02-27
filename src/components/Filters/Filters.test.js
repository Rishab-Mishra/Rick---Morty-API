import { screen , render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/';
import Filters from "./Filters";
import Cards from "../Cards/Cards";


describe('Filters component', () => {
  it('should trigger setStatus function when status filter is clicked', () => {
    const setStatus = jest.fn();
    render(<Filters setStatus={setStatus} />);
    
    fireEvent.click(screen.getByText('Dead'));
    expect(setStatus).toHaveBeenCalledWith('dead');
    

    fireEvent.click(screen.getByText('Alive'));
    expect(setStatus).toHaveBeenCalledWith('alive');
  });

  it('should trigger setGender function when gender filter is clicked', () => {
    const setGender = jest.fn();
    render(<Filters setGender={setGender} />);
    
    fireEvent.click(screen.getByText('Male'));
    expect(setGender).toHaveBeenCalledWith('male');

    fireEvent.click(screen.getByText('Female'));
    expect(setGender).toHaveBeenCalledWith('female');
  });

  it('should trigger setSpecies function when species filter is clicked', () => {
    const setSpecies = jest.fn();
    render(<Filters setSpecies={setSpecies}/>);
    
    fireEvent.click(screen.getByText('Human'));
    expect(setSpecies).toHaveBeenCalledWith('human');

    fireEvent.click(screen.getByText('Animal'));
    expect(setSpecies).toHaveBeenCalledWith('animal');
  });

  it('Checking the toggle functionality', async()=>{
    const setStatus = jest.fn();
    render(<Filters 
        setStatus={setStatus}
        status={null}
      />
    );
    const deadFilter = screen.getByText('Dead');
    const aliveFilter = screen.getByText("Alive");
    fireEvent.click(deadFilter);
    await waitFor(()=> expect(setStatus).toHaveBeenCalledWith('dead'));
    fireEvent.click(deadFilter);
    await waitFor(()=> expect(setStatus).toHaveBeenCalledWith('dead'));
    expect(setStatus).toHaveBeenCalledTimes(2);
    fireEvent.click(aliveFilter);
    expect(setStatus).toHaveBeenCalledWith('alive');
  });

});