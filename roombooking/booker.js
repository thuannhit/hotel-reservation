const fs = require('fs');
const booker = {
    readInputData: function () {
        let textInput = fs.readFileSync('input.txt', 'utf-8');
        // This is just for reading an input test file with a correct format. I assumed the input file is having a fixed pattern, and no need to check the values
        // Fist line is an array for Arrival
        // Seccond line is an array for Departure
        // Third line is a number of rooms
        return {
            aArrival: textInput.split('\r\n')[0].replace(/[\[\]]/g, '').split(',').map(x => parseInt(x)),
            aDeparture: textInput.split('\r\n')[1].replace(/[\[\]]/g, '').split(',').map(x => parseInt(x)),
            rooms: parseInt(textInput.split('\r\n')[2])
        }
    },
    getNeededRooms: function (aArrival, aDeparture) {
        let aCombinedDay = aArrival.concat(aDeparture),
            iMaxDay = Math.max(...aCombinedDay),
            iMinDay = Math.min(...aCombinedDay),
            iLengthOfCheckingDay = iMaxDay - iMinDay + 1,
            aFullfilledDay = new Array(iLengthOfCheckingDay).fill(0),
            iDifferentDay = iMinDay,
            iCheckinLength = aArrival.length,
            iCheckoutLength = aDeparture.length;
        if (iCheckinLength !== iCheckoutLength) {
            console.log("The input values are not true!!");
            return [];
        } else {
            for (let i = 0; i <= iCheckoutLength; i++) {
                for (let date = aArrival[i]; date <= aDeparture[i]; date++) {
                    (aFullfilledDay[date - iDifferentDay])++;
                }
            }
        }
        return aFullfilledDay;
    },
    getOverLoadedDay:function(aNeededRooms, iDifferentDay){
        if (aNeededRooms.length>=1){
            let iMaxNeedRoom = Math.max(...aNeededRooms),
                sDay="";
            for (var i=0; i<aNeededRooms.length; i++){
                if (aNeededRooms[i]===iMaxNeedRoom){
                    sDay=sDay+`${i+iDifferentDay} `
                }
            }
            return sDay
        }
        return ""
    },
    execute: function () {
        let oInputData = this.readInputData(),
            aNeededRooms = this.getNeededRooms(oInputData.aArrival, oInputData.aDeparture),
            iDifferentDay = Math.min(...oInputData.aArrival.concat(oInputData.aDeparture));
        console.log(aNeededRooms);
        let iMaxNeedRoom = Math.max(...aNeededRooms);
        if (iMaxNeedRoom < oInputData.rooms) {
            console.log("true");
        } else {
            console.log("false");
            var sListOfDayOverLoad = this.getOverLoadedDay(aNeededRooms, iDifferentDay);
            console.log(`Because we need ${iMaxNeedRoom} room(s) at day ${sListOfDayOverLoad} but there are only ${oInputData.rooms} room(s)`)
        }
    }
};

module.exports = booker;