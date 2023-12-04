import React  from 'react'
import all_product from '../Components/Assets/all_product'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
    let {productId} = useParams();
    let product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcrumbs product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
        </div>
    )
}

export default Product