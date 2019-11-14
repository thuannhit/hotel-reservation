var assert = require('assert');
import { booker } from '../roombooking/booker';

describe('# It is testing the booker module', function () {
    it("Testing the case it has enough rooms", function () {
        console.log(booker);
        let aArrival = [1, 3, 5, 7, 8, 8],
            aDeparture = [2, 4, 6, 10, 9, 12],
            rooms = 3;
        let isEnoughRoom = booker.isEnoughRoom(aArrival, aDeparture, rooms);
        assert.equal(isEnoughRoom, true);
    });
    it("Testing the case it doesn't has enough rooms", function () {
        console.log(booker);
        let aArrival = [1, 2, 5, 7, 8, 8],
            aDeparture = [2, 4, 6, 10, 9, 12],
            rooms = 2;
        let isEnoughRoom = booker.isEnoughRoom(aArrival, aDeparture, rooms);
        assert.equal(isEnoughRoom, false);
    });
    it("Testing the case the input data is not valid rooms", function () {
        console.log(booker);
        let aArrival = "Invalid value",
            aDeparture = [2, 4, 6, 10, 9, 12],
            rooms = 2;
        let isEnoughRoom = booker.isEnoughRoom(aArrival, aDeparture, rooms);
        assert.equal(isEnoughRoom, false);
    });
});
