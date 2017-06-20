import React from 'react'

import ResultRow from '../ResultRow/ResultRow'

import './QueryResults.css'

export default function QueryResults(props) {
   const rows = props.results.map((result, index) => {
      return (
         <ResultRow key={index} result={result} />
      )
   })
   const header = props.fields.map(field => {
      return (
         <th key={field.columnID}>{field.name}</th>
      )
   })
   return (
      <div className="query-results table-responsive">
         <table className="table table-striped">
            <thead>
               <tr >
                  {header}
               </tr>
            </thead>
            <tbody>
               {rows}
            </tbody>
         </table>
      </div>
   )
}