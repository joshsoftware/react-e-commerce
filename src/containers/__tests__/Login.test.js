import { Selector } from 'testcafe';

fixture('LoginPage Test').page('http://localhost:3000/login');

test('Login without input', async (t) => {
  const loginButton = Selector('button').withText('Login');

  await t.click(loginButton);

  const form = await Selector('form').innerText;

  await t
    .expect(form)
    .contains('email is a required field', 'Reject blank e-mail input')
    .expect(form)
    .contains('password is a required field', 'Reject blank password input');
});

test('Login with invalid email input', async (t) => {
  const email = Selector('input').nth(0);
  const form = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t
    .typeText(email, 'rahul.shah')
    .click(loginButton)
    .expect(form.innerText)
    .contains('email must be a valid email', 'Reject invalid email input');
});

test('Login with unregistered and uninvited email', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t.typeText(email, 'rahul@rocksify.com').typeText(password, '1x234').click(loginButton);

  await t.expect(body.innerText).contains('No user found', 'Reject invalid email input');
});

test('Login with registered but disabled user', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t.typeText(email, 'vikram@gmail.com').typeText(password, '1x234').click(loginButton);

  await t.expect(body.innerText).contains('User Disabled', 'Reject invalid email input');
});

test('Login with invited email but not verified', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t
    .typeText(email, 'vikramsingh16294@gmail.com')
    .typeText(password, '1x234')
    .click(loginButton);

  await t
    .expect(body.innerText)
    .contains(
      'Email Not Verified: Please check indox of your registered email to verify your account',
      'Reject invalid email input'
    );
});

test('Login with invited email but not verified and disabled', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t.typeText(email, 'dvpradhan314@gmail.com').typeText(password, '1x234').click(loginButton);

  await t.expect(body.innerText).contains('User Disabled', 'Reject invalid email input');
});

test('Login with registered email and invalid password', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t.typeText(email, 'vikramsingh@gmail.com').typeText(password, '1x234').click(loginButton);

  await t.expect(body.innerText).contains('Invalid Credentials', 'Reject invalid email input');
});

test('Successful login with valid credentials', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const loginButton = Selector('button').withText('Login');

  await t
    .typeText(email, 'vikramsingh@gmail.com')
    .typeText(password, 'qwerty123!')
    .click(loginButton);

  await t.expect(body.innerText).contains('Successfully Login', 'Reject invalid email input');
});
