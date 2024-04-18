import { log } from 'console'

const ViewProduct = ({ productData }: any) => {
    if (!productData) {
        return null
    }

    return (
        <div>
            <h2>View Product</h2>
            <p>Category: {productData.cat}</p>
            <p>Brand: {productData.brand}</p>
            <img src={productData.imageSrc} />
            <p>Product Weight: {productData.weight}</p>
            {/* Add more fields as needed */}
        </div>
    )
}

export default ViewProduct
