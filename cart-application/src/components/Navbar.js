import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid col-2">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
        </div>
        <div className='col-4'>
          Items : <span>{this.props.productCount}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
