import apiHelper from './apiHelper';

const updateProduct = ({
  updateProductId,
  productTitle,
  description,
  productPrice,
  discount,
  tax,
  stock,
  brand,
  categoryId,
  category,
  color,
  size,
  imageUrl,
  token
}) => {
  let product_title = productTitle,
    product_price = productPrice,
    category_id = categoryId
    //console.log('dsds',imageUrl.name)
    let  image_url = [];
   image_url.push(imageUrl);
  //product_id = updateProductId;
  console.log(image_url)
  
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  let data = new FormData();
  data.append('product_title',product_title);
  data.append('description',description);
  data.append('productproduct_price_title', parseFloat(product_price));
  data.append('discount', parseFloat(discount));
  data.append('tax', parseFloat(tax));

  data.append('stock',parseInt(stock));
  data.append('brand',brand);
  data.append('category_id', parseInt(category_id));
  data.append('category',category);
  data.append('color',color);
  data.append('size',size);
  data.append('image_url',image_url);
  // const data = {
  //   product_title: product_title,
  //   description: description,
  //   product_price: parseFloat(product_price),
  //   discount: parseFloat(discount),
  //   tax: parseFloat(tax),
  //   stock: parseInt(stock),
  //   brand: brand,
  //   category_id: parseInt(category_id),
  //   category: category,
  //   color: color,
  //   size: size,
  //   image_url: image_url
  // };

  return apiHelper(
    'put',
    `${process.env.REACT_APP_SERVER_URL}product/${updateProductId}`,
    data,
    headers
  );
};
export { updateProduct };
