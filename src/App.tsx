import { createContext,useReducer } from 'react';
import './App.css'
import Calculator from './Calculator';


type calculatorType = {

  firstNumber : number  , 
  secondNumber : number ,
  total : number
  sign : string
};

type contextType = {

  calculator: calculatorType,
  dispatch: React.Dispatch<actionType<string , string>> 
}
const calculatorObject : calculatorType = {
  firstNumber : 0,
  secondNumber : 0,
  total : 0,
  sign : 'add'
}

const initialContext : contextType = {
  calculator : calculatorObject,
  dispatch : () => {},
}

type actionType<typeType , payloadType> = {

    type : typeType,
    payload : payloadType

}

const enum operators{

  CALCULATE = 'calculate',
  ADD = 'add',
  SUBTRACT = 'minus',
  DIVIDE = 'divide',
  MULTIPLE = 'multiple',
  ADD_FIRST_INPUT = 'addFirstInput',
  ADD_SECOND_INPUT = 'addSecondInput',
  ADD_SIGN_INPUT = 'addSignInput'

}

export const calculatorContext = createContext<contextType>(initialContext);



const calculatorOperations = (calculator : calculatorType , action : actionType<string , string> ) : calculatorType =>{

  switch(action.type){

    case operators.CALCULATE :
                              switch(action.payload){

                                case operators.ADD : 
                                                    const addTotal = calculator.firstNumber + calculator.secondNumber;
                                                     return {...calculator , total : addTotal};
                                
                                case operators.SUBTRACT : const subtractTotal = calculator.firstNumber - calculator.secondNumber;
                                                     return {...calculator , total : subtractTotal};
                                                     
                                case operators.MULTIPLE : const multipleTotal = calculator.firstNumber * calculator.secondNumber;
                                return {...calculator , total : multipleTotal};
                                
                                case operators.DIVIDE : const divideTotal = calculator.firstNumber / calculator.secondNumber;
                                                     return {...calculator , total : divideTotal};
                                default : return calculator;
                              }
    case operators.ADD_FIRST_INPUT : return {...calculator , firstNumber : parseInt(action.payload)}
    case operators.ADD_SECOND_INPUT : return {...calculator , secondNumber : parseInt(action.payload)}
    case operators.ADD_SIGN_INPUT : return {...calculator , sign : action.payload}
    default : return calculator;
  }
  
}

function App() {

  const [calculator , dispatch ] = useReducer(calculatorOperations , calculatorObject  );
  
  return (
    <>
      <calculatorContext.Provider value={{calculator , dispatch}}>
        <Calculator/>
      </calculatorContext.Provider>
    
    </>
  )
}

export default App
