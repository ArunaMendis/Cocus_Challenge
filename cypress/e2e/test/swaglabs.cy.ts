import { personInfor } from '@fixtures/personInfor';
import { productItems } from '@fixtures/products';
import { testUsers } from '@fixtures/users';
import { Overview } from '@lib/overview_page';
import { ShowMyCart } from '@lib/yourCart_page';
import { EnterYourDetails } from '@lib/yourInfor_page';
import { LoginPage, ProductSelection } from 'cypress/e2e/pages';


describe('SauceLabs Assignment', function() {
  it('Main test scenario', function() {

      //TC_01
      LoginPage.visitLoginPage(); 
      LoginPage.verifyLoginPageLoadedProperly();
      LoginPage.loginWithCredentials(testUsers.login.username,testUsers.login.seedPassword);
      LoginPage.verifyUserNavigateLandingPage();
      //TC_02
      ProductSelection.selectItem3toCart(productItems.products.product1Name);
      //TC_03
      ShowMyCart.checkOutProcess();
      //TC_04
      EnterYourDetails.fillYourInfor(personInfor.infor.firstName, personInfor.infor.lastName,personInfor.infor.PostalCode);
      //TC_05
      Overview.finishTransaction();
      

  });
});
