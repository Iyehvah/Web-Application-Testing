import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// PASSES

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// PASSES
// test('balls reset to 0 after reaching 4', () => {
//     let ball = 3;
//     let outcome = 0;

//     if(ball === 3) {
//         ball = 0;
//     }
//     expect(ball).toBe(outcome);
// });

//PASSES
// test('strike reset to 0 after reaching 3' , () => {
//     let strike = 1;
//     let outcome = 0;

//     if(strike === 1) {
//         strike = 0;
//     }
//     expect(strike).toBe(outcome);
// });

//PASSES
// test('balls incriment by 1' , () => {
//     let ball = 0;
//     let outcome = 1;

//     if(ball === 0) {
//         ball = 1;
//     }
//     expect(ball).toBe(outcome);
// });


// PASSES
// test('strikes incriment by 1' , () => {
//     let strike = 1;
//     let outcome = 2;

//     if(strike === 1) {
//         strike = 2;
//     }
//     expect(strike).toBe(outcome);
// });