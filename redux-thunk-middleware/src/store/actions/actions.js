    export const ageUp = val => {
        return dispatch =>{
            dispatch(loading());
            setTimeout(() => {
                val++;
                dispatch(ageUpAsnc(val));
            },5000)
        }
    }

    export const ageUpAsnc = (val) => {
        return { type : 'AGE_UP', value : val}
    };

    export const ageDown = (val) => {
        return { type : 'AGE_DOWN', value : val}
    };



export const loading = () => {
    return{
        type : "LOADING"
    }
}
