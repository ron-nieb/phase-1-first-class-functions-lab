const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers
};
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  module.exports = createFareMultiplier;
  /*describe('createFareMultiplier()', function () {
    it('returns a function', function () {
      const fareMultiplier = createFareMultiplier(2);
      expect(fareMultiplier).to.be.a('function');
    });
  
    it('should multiply a given value using the created multiplier', function () {
      const fareMultiplier = createFareMultiplier(2);
      expect(fareMultiplier(10)).to.equal(20);
    });
  
    it('should multiply a given value by 5 using the created quintupler', function () {
      const fareQuintupler = createFareMultiplier(5);
      expect(fareQuintupler(5)).to.equal(25);
    });
  });*/
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  
  function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  /*describe('fareDoubler()', function () {
    it('is a function', function () {
      expect(fareDoubler).to.be.a('function');
    });
  
    it('doubles fares', function () {
      expect(fareDoubler(10)).to.eql(20);
    });
  });*/
  
  module.exports = {
    createFareMultiplier,
    fareDoubler,
  };
  function fareTripler(fare) {
    return fare * 3;
  }
  
  /*describe('fareTripler()', function () {
    it('is a function', function () {
      expect(fareTripler).to.be.a('function');
    });
  
    it('triples fares', function() {
        expect(fareTripler(12)).to.eql(36);
      });
    });*/
    function selectDifferentDrivers(drivers, selectFn) {
        return selectFn(drivers);
      }
      
    
     /*describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
        it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
          expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);*/
    
      
      
      
      
      
      

  
 
  
  

  