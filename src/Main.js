import React, { useCallback, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';
import { pressClear, pressEquals, pressNum, pressOp } from './reducers/reducer';
import './App.css';

function App({ calcState, pressNumD, pressEqualsD, pressClearD, pressOpD }) {
  const [input, setInput] = useState(calcState.stack[0]);

  const handleEqual = () => {
    console.log('bob', calcState);
    let result = eval(calcState);
    pressEqualsD(result);
  };

  useEffect(() => {
    let last = calcState.stack.length - 1;
    setInput(calcState.stack[last]);
  }, [calcState.stack]);

  console.log(calcState, calcState[calcState.length - 1]);

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={pressNumD}>7</Button>
          <Button handleClick={pressNumD}>8</Button>
          <Button handleClick={pressNumD}>9</Button>
          <Button handleClick={pressOpD}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={pressNumD}>4</Button>
          <Button handleClick={pressNumD}>5</Button>
          <Button handleClick={pressNumD}>6</Button>
          <Button handleClick={pressOpD}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={pressNumD}>1</Button>
          <Button handleClick={pressNumD}>2</Button>
          <Button handleClick={pressNumD}>3</Button>
          <Button handleClick={pressOpD}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={pressNumD}>.</Button>
          <Button handleClick={pressNumD}>0</Button>
          <Button handleClick={pressEqualsD}>=</Button>
          <Button handleClick={pressOpD}>-</Button>
        </div>
        <div className="row">
          <Clear handleClear={pressClearD}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  calcState: state,
});

const bindAC = (dispatch) =>
  bindActionCreators(
    {
      pressNumD: pressNum,
      pressEqualsD: pressEquals,
      pressClearD: pressClear,
      pressOpD: pressOp,
    },
    dispatch
  );

export default connect(mapStateToProps, bindAC)(App);
