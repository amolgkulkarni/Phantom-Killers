'use strict';

describe('Controller: OrganizationeditCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationeditCtrl = $controller('OrganizationeditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
