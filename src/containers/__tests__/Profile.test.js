import { Selector, ClientFunction } from 'testcafe';

fixture('Profile Page Test')
  .page('http://localhost:3000/login')
  .beforeEach(async (t) => {
    const email = Selector('input').nth(0);
    const password = Selector('input').nth(1);
    const loginButton = Selector('button').withText('Login');

    await t
      .typeText(email, 'testuser@test.com')
      .typeText(password, 'test123!')
      .click(loginButton)
      .navigateTo('http://localhost:3000/profile');
  });

test('After Update Profile Click', async (t) => {
  const updateProfileButton = Selector('button').withText('Edit Profile');
  const getURL = ClientFunction(() => window.location.href);
  await setTimeout(() => {}, 5000);
  await t.click(updateProfileButton);
  await t.expect(getURL()).contains('http://localhost:3000/profile/update');
});

test('Password validation', async (t) => {
  await setTimeout(() => {}, 5000);
  const updateProfileButton = Selector('button').withText('Edit Profile');
  await t.click(updateProfileButton);
  const password = Selector('input').nth(0);
  const body = Selector('body');
  const updateButton = Selector('button').withText('Update');

  await t.typeText(password, '12qw!@').click(updateButton);
  await t
    .expect(body.innerText)
    .contains('password must be at least 8 characters', 'minimum 8 characters');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, '12345qwe').click(updateButton);
  await t
    .expect(body.innerText)
    .contains('must contain one or more special characters', 'must contain special character');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, 'qwerty!@#').click(updateButton);
  await t
    .expect(body.innerText)
    .contains('must contain one or more numeric characters', 'must contain numeric character');

  await t.selectText(password).pressKey('delete');

  await t.typeText(password, '123456!@#').click(updateButton);
  await t
    .expect(body.innerText)
    .contains(
      'must contain one or more uppercase or lowercase characters',
      'must contain alphabets'
    );
});

test('Profile picture validation', async (t) => {
  await setTimeout(() => {}, 5000);
  const updateProfileButton = Selector('button').withText('Edit Profile');
  await t.click(updateProfileButton);
  const profilePicture = Selector('input').withAttribute('type', 'file');
  const body = Selector('body');
  const updateButton = Selector('button').withText('Update');

  await t.setFilesToUpload(profilePicture, '../../images/shirt.pdf').click(updateButton);
  await t
    .expect(body.innerText)
    .contains('allowed files jpg, jpeg, gif, webp, png', 'valid file selection error failed');
});

test('Successful updation', async (t) => {
  await setTimeout(() => {}, 5000);
  const updateProfileButton = Selector('button').withText('Edit Profile');
  await t.click(updateProfileButton);
  const body = Selector('body');
  const updateButton = Selector('button').withText('Update');

  await t.click(updateButton);

  await t.expect(body.innerText).contains('profile Updated Successfully', 'successfully updated');
});
