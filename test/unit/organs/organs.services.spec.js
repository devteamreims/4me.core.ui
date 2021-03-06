describe('4me.core.organs.services', function() {
  beforeEach(angular.mock.module('4me.core.organs.services'));

  describe('mainOrganService', function() {
    var mainOrganService;
    var errors;
    var notifications;

    var stubOrgan = {
      name: 'stub',
      navigateTo: function() {
        return;
      },
      getNotificationService: function() {
        return {};
      },
      getStatusService: function () {
        return {};
      }
    };

    beforeEach(inject(function(_mainOrganService_) {
      mainOrganService = _mainOrganService_;
    }));

    it('should provide a proper API', function() {
      mainOrganService.getAll.should.be.a('function');
      mainOrganService.register.should.be.a('function');
    });

    it('should allow a valid organ to register', function() {
      var r = mainOrganService.register(stubOrgan);
      r.should.have.keys('name', 'navigateTo', 'getNotificationService', 'getStatusService', 'isActive');
    });

    it('should not allow two organs with the same name', function() {
      var r = mainOrganService.register(stubOrgan);
      mainOrganService.register(stubOrgan).should.be.false;
    });

    it('should list all organs', function() {
      var r = mainOrganService.register(stubOrgan);
      mainOrganService.getAll().should.eql([r]);
    });

    it('should be able to find an organ', function() {
      var r = mainOrganService.register(stubOrgan);
      mainOrganService.find('stub').should.eql(r);
    });

    it('should return an empty object if unable to find said organ', function() {
      expect(mainOrganService.find('stub')).to.be.undefined;
      expect(mainOrganService.find()).to.be.undefined;
    });

    it('should decorate the navigateTo callback', function() {
      var stubFunc = sinon.stub();
      var o = _.clone(stubOrgan);
      o.navigateTo = stubFunc;
      var r = mainOrganService.register(o);
      r.navigateTo();
      stubFunc.should.have.been.called;
    });

    it('should decorate the getNotificationService callback', function() {
      var stubFunc = sinon.stub();
      var o = _.clone(stubOrgan);
      o.getNotificationService = stubFunc;
      var r = mainOrganService.register(o);
      r.getNotificationService();
      stubFunc.should.have.been.called;
    });

    it('should decorate the getStatusService callback', function() {
      var stubFunc = sinon.stub();
      var o = _.clone(stubOrgan);
      o.getStatusService = stubFunc;
      var r = mainOrganService.register(o);
      r.getStatusService();
      stubFunc.should.have.been.called;
    });


  });
});
