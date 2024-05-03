import { useRef , useContext} from 'react';
import { calculatorContext } from './App';
import './Calculator.css';

const Calculator = () =>{


    const useCalculator = useContext(calculatorContext);
    return(

        <div className='calculator'>
            <h1>Calculator Bruv</h1>
            <input onChange={(e) => {useCalculator.dispatch({type : 'addFirstInput' , payload : e.target.value} )}} value={useCalculator.calculator.firstNumber} type='number' placeholder='Enter First Number'/>
            <select onChange={(e) => {useCalculator.dispatch({type : 'addSignInput' , payload : e.target.value} )}} value={useCalculator.calculator.sign} title='signs'  className="selector">

                <option value={'add'}>Add</option>
                <option value={'minus'}>Subtract</option>
                <option value={'divide'}>Divide</option>
                <option value={'multiple'}>Multiple</option>

            </select>
            <input onChange={(e) => {useCalculator.dispatch({type : 'addSecondInput' , payload : e.target.value} )}} value={useCalculator.calculator.secondNumber} type='number' placeholder='Enter Second Number'/>
            <button onClick={() => {useCalculator.dispatch({type : 'calculate' , payload : useCalculator.calculator.sign}); }}>Calculate</button>

            <h1>{`The anwser is ${useCalculator.calculator.total}`}</h1>
        </div>

    );

}

export default Calculator;