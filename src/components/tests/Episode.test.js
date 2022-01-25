import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const testData = {
    id: 1,
    name: "The best show",
    image: "",
    season: 1,
    number: 1,
    summary: "This episode is about kids",
    runtime: 1
}

const noImage = {
    id: 1,
    name: "The best show",
    image: null,
    season: 1,
    number: 1,
    summary: "This episode is about kids",
    runtime: 1
}


test("renders without error", () => {
    render(<Episode episode={[]}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testData}/>)
    const summary = screen.queryByText(/kids/i)
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("episode")


});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={noImage} />)

    const image = screen.queryByAltText('./https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument
})
;