import React, { Component } from 'react'
import { connect } from 'react-redux';

class MainCompReact extends Component {
   
    sell =()=>{
       this.props.dispatch(sellAction());
    }
    buy=(qty)=>{
        this.props.dispatch(buyAction(qty));
    }
    
    render() {
        return (
            <div>
                <h2>Apples {this.props.apples}</h2>
                
                <button className="btn btn-primary mr-3" onClick={()=>this.sell()}>Sell</button>
            
                <button className="btn btn-primary mr-3" onClick={()=>this.buy(1)}>Buy 1</button>
                
                <button className="btn btn-primary mr-3" onClick={()=>this.buy(5)}>Buy 5</button>
            </div>
        )
    }
}

const sellAction = () =>({
    type:"SELL",

});
const buyAction =(qty)=>({
    type :"BUY",
    payload:{quantity:qty},
})
const mapStateToProps = (state)=>{
    return{
        apples:state.apples,

    }
}
export default connect(mapStateToProps)(MainCompReact);
