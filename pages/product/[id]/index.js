import Product from "../../../components/Product/Product"

//Pre renderer server side page

const ProductDetails = (props) => {
    return (
        <Product
            title={props.productData.title}
            image={props.productData.image}
            category={props.productData.category}
            rating={props.productData.rating}
            description={props.productData.description}
            price={props.productData.price}
        />
    )
}

export default ProductDetails

//getting all path to pre render page
export const getStaticPaths = async () => {

    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();

    //const products = await data.map(el => { id: el.id })

    return {
        fallback: false,
        paths: data.map(product => ({
            params: { id: product.id.toString() }
        }))
    }

}
//pre rendering page to better search engine performance
export const getStaticProps = async (context) => {

    const productId = context.params.id;

    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();

    const selectedProduct = await data.find(el => el.id.toString() === productId)

    return {
        props: {
            productData: {
                id: selectedProduct.id.toString(),
                title: selectedProduct.title,
                image: selectedProduct.image,
                category: selectedProduct.category,
                rating: selectedProduct.rating,
                description: selectedProduct.description,
                price: selectedProduct.price
            }
        },
        revalidate: 360
    }
}