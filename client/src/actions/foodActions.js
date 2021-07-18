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