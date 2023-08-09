import React, { useState } from 'react';
import './App.css';
import JsxComponent from './JsxComponent';
import CounterComponent from './CounterComponent/CounterComponent';
import CounterClassComponent from './CounterComponent/CounterClassComponent';
import ReactForms from './ReactForms';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';
import Home from './RouterComponets/Home';
import Details from './RouterComponets/Details';
import PersonalDetails from './RouterComponets/PersonalDetails';
import About from './RouterComponets/About';
import Navbar from './RouterComponets/Navbar';

const App = () => {

  const [counterValue, setCounterValue] = useState(0);

  const reduxValues = useSelector((state) => state.ReduxActions);

  console.log("count label", reduxValues.count);

  console.log("redux label", reduxValues.label);

  const dispatch = useDispatch();

  // const increaseHandler = (value) => {
  //   setCounterValue(value);
  // }

  // const decreaseHandler = (value) => {
  //   setCounterValue(value);
  // }

  // const name = 'Gopi';

  // function formatName(key) {
  //   return key.firstName + ' ' + key.lastName;
  // }

  // const user = {
  //   firstName: 'Kiruba',
  //   lastName: 'Sankar'
  // };

  return (
    <div id="App">
      <div style={{ padding: 20 }}>Hello I am React Form</div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='home' element={<Home />}></Route>
          <Route path='details' element={<Details />}></Route>
          <Route path='personalDetails' element={<PersonalDetails />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <div>Redux Example</div>

      <button onClick={()=>dispatch({ type: 'INCREASE' })}>Increase</button>

      <span>{reduxValues.count}</span>

      <button onClick={()=>dispatch({ type: 'DECREASE' })}>Decrease</button>

      <span>{reduxValues.label}</span>

      <button onClick={()=>dispatch({ type: 'LabelChange' })}>Label Change</button> */}


      {/* <JsxComponent name={name} value={counterValue}/> */}
      {/* <CounterComponent increaseValue={increaseHandler} decreaseValue={decreaseHandler} counterValue={counterValue} passKey={2}/> */}
      {/* <CounterClassComponent/> */}

      {/* Hello {formatName(user)} */}
    </div>
  );
}

export default App;
