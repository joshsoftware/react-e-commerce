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
  return apiHelper(
    'post',
    `${process.env.REACT_APP_SERVER_URL}createProduct`,
    {
      product_title,
      description,
      product_price,
      discount,
      tax,
      stock,
      brand,
      category_id,
      category,
      color,
      size,
      image_url
    },
    headers
  );
};
export { addProduct };
