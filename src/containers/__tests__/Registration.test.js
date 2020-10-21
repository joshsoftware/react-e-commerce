import { Selector } from 'testcafe';

fixture('RegistrationPage Test').page('http://localhost:3000/register');

test('Registration without input', async (t) => {
  const registerButton = Selector('button').withText('Register');

  await t.click(registerButton);

  const form = await Selector('form').innerText;

  await t
    .expect(form)
    .contains('email is a required field', 'Reject blank e-mail input')
    .expect(form)
    .contains('No password provided', 'Reject blank password input')
    .expect(form)
    .contains('firstname is a required field', 'Reject blank firstname')
    .expect(form)
    .contains('Profile Picture is required', 'Reject blank Profile picture');
});

test('Registration with already registered email', async (t) => {
  const email = Selector('input').nth(0);
  const password = Selector('input').nth(1);
  const firstname = Selector('input').nth(2);
  const profilePicture = Selector('input').withAttribute('type', 'file');
  const body = Selector('body');
  const registerButton = Selector('button').withText('Register');

  await t
    .typeText(email, 'vikramsingh@gmail.com')
    .typeText(password, 'qwerty123!')
    .typeText(firstname, 'vikram')
    .setFilesToUpload(profilePicture, '../../images/levi.jpg')
    .click(registerButton);

  await t
    .expect(body.innerText)
    .contains('User Already Registered', 'already registered alert failed');
});

test('Password validation', async (t) => {
  const password = Selector('input').nth(1);
  const body = Selector('body');
  const registerButton = Selector('button').withText('Register');

  await t.typeText(password, '12qw!@').click(registerButton);
  await t
    .expect(body.innerText)
    .contains('must contain atleast 8 characters', 'already registered alert failed');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, '12345qwe').click(registerButton);
  await t
    .expect(body.innerText)
    .contains('must contain one or more special characters', 'already registered alert failed');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, 'qwerty!@#').click(registerButton);
  await t
    .expect(body.innerText)
    .contains('must contain one or more numeric characters', 'already registered alert failed');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, '123456!@#').click(registerButton);
  await t
    .expect(body.innerText)
    .contains(
      'must contain one or more uppercase or lowercase characters',
      'already registered alert failed'
    );
});

test('Email validation', async (t) => {
  const email = Selector('input').nth(0);
  const body = Selector('body');
  const registerButton = Selector('button').withText('Register');

  await t.typeText(email, 'vikram').click(registerButton);
  await t
    .expect(body.innerText)
    .contains('email must be a valid email', 'already registered alert failed');

  await t.selectText(email).pressKey('delete');

  await t.typeText(email, 'vikram.com').click(registerButton);
  await t
    .expect(body.innerText)
    .contains('email must be a valid email', 'already registered alert failed');
});
