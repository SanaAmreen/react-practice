import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         productID:'', qty:0
      }
    }

    addTocart=(pid)=>{
        //console.log(pid)
this.setState({productID:pid , qty:this.state.qty+1})
}




  render() {
    return (
      <div>
      <button onClick={()=>{this.addTocart(18)}}>Add To Cart</button>
      <Cart productID={this.state.productID} qty={this.state.qty}></Cart>
      </div>
    )
  }
}
class Cart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qty: this.props.qty
      }
    }
//updateqty=()=>{
 //   this.setState({qty:this.state.qty +1})
//}

static getDerivedStateFromProps(props, state){
    console.log(props.qty)
    console.log(state.qty)
    if(props.qty !== state.qty){
        return {qty: props.qty}
    }
    return null;
}

componentDidMount(){
    console.log
    ("Execute after component render.");
}
componentDidUpdate(prevProps, prevState){
    console.log("component updated.")
}
  render() {
    return (
      <div><p>Cart : {this.state.qty}</p>
      {/*<button onClick={this.updateqty}>Update Quantity</button>*/}
      </div>

    )
  }
}

export default Product

