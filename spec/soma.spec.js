var Soma = require('../index.js');

describe ('Soma Suite', function(){
    it('deve retornar 6', function(done){
        var value = Soma([1,2,3]);
        expect(value).toEqual(6);
        done();
    });
    
    it("deve retornar 10", function(done) {
    var value = Soma([1,2,3,4]);
    expect(value).toEqual(10);
    done();
    });
    
    it("deve retornar -1", function(done) {
    var value = Soma([-10,2,3,4]);
    expect(value).toEqual(-1);
    done();
    });
    
});