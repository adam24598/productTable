import React from 'react'
import PropTypes from "prop-types";
import {Table} from 'react-bootstrap'
function ProductTable(props) {
    console.log(props);
    const {prtable} = props;
    return (
        <div className ="ProductTable">
<Table striped bordered hover >
  <thead>
    <tr>
      <th>name</th>
      <th>Price</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <td>
      {prtable.map((el,i)=>(
          <tr key={i}>{el.name} </tr>
      ))
      }
    </td>
    <td>
      {prtable.map((el,i)=>(
          <tr key={i}>{el.price} </tr>
      ))
      }
    </td>
    <td>
      {prtable.map((el,i)=>(
          <tr key={i}>{el.category} </tr>
      ))
      }
    </td>
  </tbody></Table>
        </div>
    )
};
ProductTable.propTypes = {
    prtable : PropTypes.arrayOf(PropTypes.object)

};

export default ProductTable
