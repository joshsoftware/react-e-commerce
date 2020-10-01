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
  color,
  size,
  imageUrl,
  token
}) => {
  let product_title = productTitle,
    product_price = productPrice,
    category_id = categoryId;
  let image_url = imageUrl;

  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  let data = new FormData();
  if (product_title !== '') {
    data.append('product_title', product_title);
  }
  if (description !== '') {
    data.append('description', description);
  }
  if (product_price !== null) {
    data.append('product_price', parseFloat(product_price));
  }
  if (discount !== null) {
    data.append('discount', parseFloat(discount));
  }
  if (tax !== null) {
    data.append('tax', parseFloat(tax));
  }
  if (stock !== null) {
    data.append('stock', parseInt(stock));
  }
  if (brand !== '') {
    data.append('brand', brand);
  }
  if (category_id !== 0) {
    data.append('category_id', category_id);
  }
  if (color !== '') {
    data.append('color', color);
  }
  if (size !== '') {
    data.append('size', size);
  }
  if (image_url !== null) {
    data.append('images', image_url);
  }
  return apiHelper(
    'put',
    `${process.env.REACT_APP_SERVER_URL}product/${updateProductId}`,
    data,
    headers
  );
};
export { updateProduct };
