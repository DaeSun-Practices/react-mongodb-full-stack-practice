//reducer의 역할을 한다.
export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        
        case 'CREATE':
            return [...posts, action.payload];
        
        default:
            return posts;
    }
}