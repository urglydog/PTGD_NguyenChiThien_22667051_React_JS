function Item({userID, id,title,body}){
    return(
        <>
            <div class="card" key={id}>
                <div class="card-body">
                    <h1>UserID: {userID}</h1>
                    <h2>postID: {id}</h2>
                    <h4 class="card-title">Title: {title}</h4>
                    <p class="card-text">Body: {body}</p>
                </div>
            </div>
        </>
    )
}
export default Item;