import React from 'react'
import {IResponse} from "../interfaces";
import DataBlock from "./DataBlock";

interface ResultsProps {
  results: IResponse | undefined
}

function Results({results}: ResultsProps) {
  return (
    <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
      <h3 className="text-center m-10 text-3xl">Results</h3>
      <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-2">
        <DataBlock value={results?.H!} description="H" />
        <DataBlock value={results?.K!} description="K" />
      </div>
    </div>
  )
}

export default Results
