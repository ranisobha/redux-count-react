const initialState={
    apples:20
}

const reducer=(state=initialState,action)=>{
    console.log("IN reducer :state:",state,"Action:",action)
 if(action.type === "SELL") return {apples:state.apples-1};
 else if(action.type === "BUY") return {apples:state.apples+action.payload.quantity}
 return state;
}

export default reducer;