import { booker } from './roombooking/booker.js';
let aArrival = [1, 3, 5, 7, 8, 8],
    aDeparture = [2, 4, 6, 10, 9, 12],
    rooms = 2;
console.log(booker.isEnoughRoom(aArrival, aDeparture, rooms));