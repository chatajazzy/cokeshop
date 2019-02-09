import React from 'react';

const ProductSorter = (props) => {
  return (
    <form>
      <select
        value={props.productsSortedBy}
        onChange={(e) => props.handleSorting(e)}
      >
        <option name="name">name</option>
        <option name="price">price</option>
      </select>
    </form>
  )
}

export default ProductSorter;
