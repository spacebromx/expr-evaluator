import React, {useState} from 'react'
import Select from './Select'
import Input from './Input'
import Results from "./Results";
import {IFormValues, IResponse} from "../interfaces";
import {generatePayload, fetchData} from "../utils";
import {API_URL} from "../constants";

function Form() {
  const initialValues:IFormValues = {
    A: "true",
    B: "true",
    C: "true",
    D: "1.45",
    E: "1",
    F: "1",
    exprType: 'base'
  }

  const [state, setState] = useState<IFormValues>(initialValues)
  const [results, setResults] = useState<IResponse>()
  const {A,B,C,D,E,F, exprType} = state

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const payload = generatePayload(state)
    try {
      const result = await fetchData<IResponse>(`${API_URL}/${state.exprType}`, payload)
      setResults(result)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <form className="w-full p-10 bg-white rounded-lg shadow" onSubmit={handleSubmit}>
      <h2 className="block text-gray-700 text-4xl font-bold mb-12 text-center">
        Expressions Calculator
      </h2>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Select label="A" name="A" value={A} onChange={event => {
            setState({...state, A: event.target.value})
          }} />
        </div>
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Select label="B" name="B" value={B} onChange={event => {
            setState({...state, B: event.target.value})
          }} />
        </div>
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Select label="C" name="C" value={C} onChange={event => {
            setState({...state, C: event.target.value})
          }} />
        </div>
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Input label="D (float number)" name="D" placeholder="e.g. 1.45" value={D} onChange={event => {
            setState({...state, D: event.target.value})
          }} />
        </div>
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Input label="E (integer number)" name="E" placeholder="e.g. 1" value={E} onChange={event => {
            setState({...state, E: event.target.value})
          }} />
        </div>
        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
          <Input label="F (integer number)" name="F" placeholder="e.g. 5" value={F} onChange={event => {
            setState({...state, F: event.target.value})
          }} />
        </div>
      </div>
      <div className="md:flex md:items-center my-10">
        <div className="w-2/3 flex">
          <Select
            name="exprType"
            label="Expression Type"
            options={[
              {text: 'Base case', value: 'base'},
              {text: 'Custom1', value: 'custom1'},
              {text: 'Custom2', value: 'custom2'},
            ]}
            onChange={event => {
              setState({...state, exprType: event.target.value})
            }}
            value={exprType}
          />
        </div>
        <div className="w-1/3 items-center flex justify-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </div>
      {results && <Results results={results} />}
    </form>
  )
}

export default Form
