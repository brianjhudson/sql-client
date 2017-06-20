import React from 'react'

export default function ResultRow(props) {
   const cells = Object.values(props.result).map((cell, index) => {
      return (
         <td key={index}>
            {cell}
         </td>
      )
   })
   return (
      <tr>
         {cells}
      </tr>   
   )
}