import apiHelper from './apiHelper';

const addProduct = ({
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
    image_url = imageUrl;
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  let data = new FormData();
  data.append('product_title', product_title);
  data.append('description', description);
  data.append('product_price', parseFloat(product_price));
  data.append('discount', parseFloat(discount));
  data.append('tax', parseFloat(tax));

  data.append('stock', parseInt(stock));
  data.append('brand', brand);
  data.append('category_id', parseInt(category_id));
  data.append('category', category);
  data.append('color', color);
  data.append('size', size);
  data.append('images', image_url);
  return apiHelper('post', `${process.env.REACT_APP_SERVER_URL}createProduct`, data, headers);
};
export { addProduct };
