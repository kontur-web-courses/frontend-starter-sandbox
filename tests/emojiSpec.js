var expect = require('chai').expect;
var emoji = require('../src/emoji');

describe("emoji", function() {
    it('should not change text without smileys', function(){
        expect(emoji.format("Hello world")).to.equal("Hello world");
    });
    it('should replace smiley with unicode symbol', function(){
        expect(emoji.format("Hi! :)")).to.equal("Hi! ☺");
    });
});
