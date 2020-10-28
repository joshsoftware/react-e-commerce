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

test('successful product search test', async (t) => {
  const searchInput = Selector(
    '#root > div > div:nth-child(7) > div > div.col-6.col > div > div:nth-child(1) > input'
  );
  const searchButton = Selector('button').withText('Search');

  await t.typeText(searchInput, 'shirt').click(searchButton);
  const body = Selector('.card');
  const totalCards = await body.count;
  for (let i = 0; i < totalCards; i++) {
    const card = body.nth(i);
    const text = await card.innerText;
    console.log('card text is', typeof text);
    await t.expect(text.toLowerCase()).contains('shirt', 'test failed');
  }
});

test('Add To Cart test', async (t) => {
  const card = Selector('.card').withText('Add to Cart').child('.card-body').child('.card-title');
  const text = await card.innerText;
  const button = Selector('button').withText('Add to Cart');
  const body = Selector('body');
  await t.click(button);

  await t.expect(body.innerText).contains(`${text} added to cart`);
  // await t.click(button);
});
