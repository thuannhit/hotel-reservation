var assert = require('assert');
var booker = require('../roombooking/booker');
var expect = require('chai').expect;

describe('# It is testing the booker module', function () {
    it("Testing the readInputData function", function () {
        console.log(booker);
        var oInputData = booker.readInputData();
        assert.equal(oInputData.rooms, 2);
    });
    it("Testing the getOverLoadedDay function", function () {
        var sDayValid = booker.getOverLoadedDay([1, 1, 1, 1, 1, 1, 1, 3, 3, 2, 1, 1], 1);
        var sDayInvalid = booker.getOverLoadedDay([], 1);
        assert.equal(sDayValid, "8 9 ");
        assert.equal(sDayInvalid, "");
    });
    it("Testing the getNeedRooms function", function () {
        var aNeededRoom = booker.getNeededRooms([1, 3, 5, 7, 8, 8], [2, 4, 6, 10, 9, 12]);
        assert.equal(aNeededRoom[7], 3);
    });
    it("Testing the execute function", function () {
        var values = booker.execute();
        assert.ok(booker, "booker.execute ran well");
    });
});
