import axios from "axios";
import {useEffect,useState} from "react";
const Axios =() => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios
        .get("https://dummyjson.com/users")
        .then((res) => {setProducts(res.data.users)
        console.log(res.data.users)
        })

        .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            <h3>Bio data</h3>
        <div>
         {products.map((pro) => (
            <div key={pro.id}>
                <div>
                <li>
        {
            pro.firstName
}
                </li>
            </div>
            {/* <div>
                {pro.reviews.map((r)=> (
                    <p key={r.id}>{r.rating}</p>
                ))}
            </div> */}
            <p>Age:{pro.age}</p>
            <p>email:{pro.email}</p>
            <p>gender:{pro.gender}</p>
    
          </div>
         ))}
        </div>
        </div>
    );
}
export default Axios;