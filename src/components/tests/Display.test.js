import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow')

const testData = {
    id: 1,
    name: "The best show",
    image: "",
    season: 1,
    number: 1,
    summary: "This episode is about kids",
    runtime: 1
}



test('renders without errors with no props', ()=>{
    render(<Display/>)
});

test('renders Show component when the button is clicked ',  async()=>{
    mockFetchShow.mockResolvedValueOnce(testData);
    
    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
    
});

test('renders show season options matching your data when the button is clicked', async()=>{
    mockFetchShow.mockResolvedValueOnce(testData);
    
    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
        const seasonOptions = screen.findAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(2);

    })
});
