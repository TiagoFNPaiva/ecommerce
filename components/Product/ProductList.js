import { useState, useEffect } from "react";
import ProductItem from '../Product/ProductItem'
import { List, Text } from '@chakra-ui/react'

import classes from './ProductList.module.css';


//List of products to render

const ProductList = (props) => {
    const [products, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {//Fetching Data from the API depending on props received
        const fetchProduct = async () => {
            let URL = ''
            if (props.cat === 'all') {
                URL = 'https://fakestoreapi.com/products'
            }
            else {
                URL = `https://fakestoreapi.com/products/category/${props.cat}`
            }
            const data = await fetch(URL)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    if (!res.ok) {
                        throw new Error(res.message || 'Could not fetch products.');
                    }
                })
                .then(json => {
                    data = json;
                    setProduct(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchProduct()
    }, [props.cat])

    useEffect(() => {//Sorting Products
        if (props.sort === "asc") {
            setProduct((prev) => [...prev].sort((a, b) => a.price - b.price))
        }
        if (props.sort === "desc") {
            setProduct((prev) => [...prev].sort((a, b) => b.price - a.price))
        }
        if (props.sort === 'n_asc') {
            setProduct((prev) => [...prev].sort((a, b) => a.title.localeCompare(b.title)))
        }
        if (props.sort === 'n_desc') {
            setProduct((prev) => [...prev].sort((a, b) => a.title.localeCompare(b.title)).reverse())
        }
    }, [props.sort]);

    useEffect(() => {//Set list to render procucts
        setFilteredProducts(products)
    }, [products]);

    useEffect(() => {//Search current filter by name
        const searchResult = filteredProducts.filter(el => el.title.toLowerCase().includes(props.search.toLowerCase()))
        setFilteredProducts(searchResult)
    }, [props.search]);

    return (
        //List Rendering
        <List className={classes.ul}>
            {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    category={product.category}
                    price={product.price}
                />
            )) : <Text>No Products found</Text>}
        </List>
    )
}

export default ProductList