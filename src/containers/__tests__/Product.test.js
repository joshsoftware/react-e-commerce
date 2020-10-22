import { Selector, ClientFunction } from 'testcafe';

fixture('Product Page Test')
  .page('http://localhost:3000/login')
  .beforeEach(async (t) => {
    const email = Selector('input').nth(0);
    const password = Selector('input').nth(1);
    const loginButton = Selector('button').withText('Login');

    await t
      .typeText(email, 'testuser@test.com')
      .typeText(password, 'test123!')
      .click(loginButton)
      .navigateTo('http://localhost:3000/products');
  });

test('Search product test', async (t) => {
  const search = Selector('input').withText('search');
  const searchButton = Selector('button').withText('Search');
  const body = Selector('body');

  await t.typeText(search, 'apple').click(searchButton);

  await t
    .expect(body.innerText)
    .contains('Apple iPhone 11 Pro (64GB)', 'product 1 found')
    .expect(body.innerText)
    .contains('Apple iPhone XR (64GB)', 'product 2 found');
});

// test('Add product test', async (t) => {
//   const addProuctButton = Selector('button').withText('Add to cart');
//   const cartButton = Selector();
// })
