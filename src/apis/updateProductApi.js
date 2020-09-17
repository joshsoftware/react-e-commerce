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
    category_id = categoryId,
    image_url = [];
  image_url.push(imageUrl);
  //product_id = updateProductId;

  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };

  const data = {
    product_title: product_title,
    description: description,
    product_price: parseFloat(product_price),
    discount: parseFloat(discount),
    tax: parseFloat(tax),
    stock: parseInt(stock),
    brand: brand,
    category_id: parseInt(category_id),
    category: category,
    color: color,
    size: size,
    image_url: image_url
  };

  return apiHelper(
    'put',
    `${process.env.REACT_APP_SERVER_URL}product/${updateProductId}`,
    data,
    headers
  );
};
export { updateProduct };
