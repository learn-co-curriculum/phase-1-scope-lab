const expect = chai.expect;

describe('Fix the Scope', function () {
  describe('declare customerName to be bob in global scope', function () {
    it('returns the customerName', function () {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function () {
    it('returns the customerName', function () {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });
  describe('setBestCustomer()', function () {
    it('setBestCustomer', function () {
      expect(window.bestCustomer).to.equal(undefined);

      window.setBestCustomer();

      expect(window.bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function () {
    it('overwrites the best customer', function () {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });

  describe('reassignLeastFavorite()', function () {
    it('unsuccessfully tries to reassign the least favorite customer', function () {
      expect(changeLeastFavoriteCustomer).to.throw(TypeError);
    });
  });

  describe('attemptTwoFavoriteCustomers()', function () {
    it('unsuccessfully tries to declare favoriteCustomer with let two times', function () {
      expect(attemptTwoFavoriteCustomers).to.throw(SyntaxError);
    });
  });
});
