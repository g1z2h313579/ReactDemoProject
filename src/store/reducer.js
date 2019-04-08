const reducer = (state,{type,payload})=>{
    console.log(type,payload)
    switch(type){
        case "MENU" :
        return Object.assign({},state,{...state,menuData : payload});
        case "SAVE_COUNT" :
        return Object.assign({},state,{...state,count : payload})
        default : 
        return state
    }
}

export default reducer