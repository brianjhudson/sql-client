import React from 'react'

export default function TableList(props) {
   const tables = Object.values(props.tables).map((table, index) => {
      return (
         <div key={index}>
            <h4>{table[0].table_name}</h4>
            <Columns columns={table} />
         </div>
      )
   })
   return (
      <div>
         {tables}
      </div>
   )
}

function Columns (props) {
   const columns = props.columns.map((column, index) => {
      return (
         <li key={index}>{column.column_name} <small>({column.data_type})</small></li>
      )
   })
   return (
      <ul className="table-list">
         {columns}
      </ul>

   )
}