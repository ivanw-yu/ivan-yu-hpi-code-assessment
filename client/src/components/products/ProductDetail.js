import React from 'react';

const productImportantDetails = [
  'title',
  'description',
  'price_str',
  'currency',
  'stock',
  'seller'
];

const sellerImportantDetails = [
  'first_name',
  'last_name',
  'country'
]

function renderObjectPropertiesAsList(obj){
  return Object.keys(obj).map(key => (
      <li>{key}:{ typeof obj[key] == 'object' ?
                    JSON.stringify(obj[key]) : obj[key]}</li>
    )
  );
}

export default ({product}) => {
    const copyProduct = Object.assign({}, product);
    const  { title,
            description,
            price_str,
            currency,
            stock,
            seller } = copyProduct;
    const copySeller = Object.assign({}, seller);
    const { first_name,
            last_name,
            country } = copySeller;

    delete copyProduct['media'];
    productImportantDetails.forEach(key => delete copyProduct[key]);
    sellerImportantDetails.forEach(key => delete copySeller[key]);

    return (
      <div className="product-details-area">
        <div className="product-details">
          <h1><u>Title:{title}</u></h1>
          <ul>
            <li>Description: {description}</li>
            <li>Price: {price_str} </li>
            <li>Currency: {currency}</li>
            <li>Stock: {stock}</li>
            <li>Seller: {first_name + ' ' + last_name}</li>
              <ul>
                <u>Seller Information</u>
                <li> Country: {country}</li>
                { renderObjectPropertiesAsList(copySeller) }
              </ul>
            <li>More Product Details</li>
            <ul>
              { renderObjectPropertiesAsList(copyProduct) }
            </ul>
          </ul>
        </div>
      </div>
    );

}
