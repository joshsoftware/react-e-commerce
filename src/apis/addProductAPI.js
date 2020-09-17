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
    image_url = [];
  image_url.push(imageUrl);
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
  return apiHelper('post', `${process.env.REACT_APP_SERVER_URL}createProduct`, data, headers);
};
export { addProduct };
