const booker = {
    readInputData: function () {
        return {
            aArrival: [1, 3, 5, 7, 8, 8],
            aDeparture: [2, 4, 6, 10, 9, 12],
            rooms: 2
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
            for (var i = 0; i <= iCheckoutLength; i++) {
                for (var date = aArrival[i]; date <= aDeparture[i]; date++) {
                    (aFullfilledDay[date - iDifferentDay])++;
                }
            }
        }
        return aFullfilledDay;

    },
    getOverLoadedDay:function(aNeededRooms, iDifferentDay){
        if (aNeededRooms.length>=1){
            var iMaxNeedRoom = Math.max(...aNeededRooms),
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
            console.log(`Because wee need ${iMaxNeedRoom} at day ${sListOfDayOverLoad} but there are only ${oInputData.rooms} rooms`)
        }
    }
};

module.exports = booker;