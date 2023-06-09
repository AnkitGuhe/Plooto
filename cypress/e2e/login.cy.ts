import LoginPage from '../pages/login.page';
import companySelectionPage from '../pages/company-selection.page';

const password = 'demoPass';
const userEmail = 'demo@gmail.com';

describe('Login Tests', () => {
  it('Should be able to login with Valid Credentials', () => {
    LoginPage.visitPage;
    LoginPage.username.type(userEmail);
    LoginPage.password.type(password);
    LoginPage.submitButton.click();
    cy.url().should('include', '/company_select.html');
    companySelectionPage.companySelectionTable.should('be.visible');
  });

  it('Should not be able to login with empty email', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.username.type(userEmail);

    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });

  it('Should not be able to login with empty password', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.password.type(password);

    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });

  it('Should not be able to login with empty feilds', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });
});
