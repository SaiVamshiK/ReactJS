import React, { Component } from "react";

class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      productName : '',
      productPrice : 0
    }
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.addProduct(this.state.productName,Number(this.state.productPrice))
      }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            onChange={(e) => {
              this.setState({productName : e.currentTarget.value})
            }}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={(e) => {
              this.setState({productPrice : e.currentTarget.value})
            }}  
          />
        </div>
        <button type="submit" className="btn btn-primary">
          AddItem
        </button>
      </form>
    );
  }
}

export default AddItem;
