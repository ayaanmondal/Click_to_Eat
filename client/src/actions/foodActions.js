import axios from "axios"

export const getAllfoods=()=> async dispatch=>{

    dispatch({type:'GET_FOODS_REQUEST'})

    try {
        const response = await axios.get('/api/foods/getallfoods')
        //console.log(response.data);
        dispatch({type: 'GET_FOODS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_FOODS_FAILED', payload :  error})
    }
}

export const getFilterfoods=(searchkey, category)=> async dispatch=>{

    var filteredFoods ;

    dispatch({type:'GET_FOODS_REQUEST'})

    try {
        const response = await axios.get('/api/foods/getallfoods')
        filteredFoods = response.data.filter(food=>food.name.toLowerCase().includes(searchkey))

        if(category != "all"){
            filteredFoods = response.data.filter(food=>food.category.toLowerCase() == category)
        }
        dispatch({type: 'GET_FOODS_SUCCESS', payload : filteredFoods})
    } catch (error) {
        dispatch({type: 'GET_FOODS_FAILED', payload :  error})
    }
}