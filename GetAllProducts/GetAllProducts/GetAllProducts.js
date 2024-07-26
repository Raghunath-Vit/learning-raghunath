import { useEffect, useState } from "react";
import axios from "axios";
import "./GetAllProducts.css"; 

function GetAllProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/1`)
            .then(function(response){
                setData(response.data);
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }, []); 

    return (
        <div className="product-list">
             <div className="product-item" key={data.id}>
                    <img src={data.image} width={"100px"} height={"100px"} alt={data.title} className="image-container" />
                    <div className="product-inner">
                        <p><strong>Price:</strong> {data.price}</p>
                        <p><strong>Category:</strong> {data.category}</p>
                        <p><strong>Rating:</strong> {data.rating?.rate}
                        <br/>
                        <strong>Count:</strong> {data.rating?.count}</p>
                    </div>
                    <div>
                        <p>{data.description}</p>
                    </div> 
            </div>
            {/* {data?.map(product => (
                <div className="product-item" key={product.id}>
                    <img src={product?.image} width={"100px"} height={"100px"} alt={product?.title} className="image-container" />
                    <div className="product-inner">
                        <p><strong>Price:</strong> {product?.price}</p>
                        <p><strong>Category:</strong> {product?.category}</p>
                        <p><strong>Rating:</strong> {product?.rating?.rate}</p>
                    </div>
                    <div>
                        <p>{product?.description}</p>
                    </div> 
            </div>
            ))} */}
        </div>
    );
}

export default GetAllProducts;
