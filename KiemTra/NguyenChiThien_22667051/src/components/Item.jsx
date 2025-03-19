

export default function Item({id, name, price, decribe, img }) {
    return (
        <div>
            {/* <h1>{id}</h1> */}
            <h3>{name}</h3>
            <img src= {img} alt="img" />
            <p>price: {price}</p>
            <p>decribe: {decribe}</p>
        </div>
    );
}
