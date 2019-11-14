
let getNeededRooms = (aArrival, aDeparture) => {
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
};

let booker = {
    isEnoughRoom: (aArrival, aDeparture, rooms) => {
        if (!Array.isArray(aArrival) || !Array.isArray(aDeparture) || !Number.isInteger(rooms)){
            return false
        }
        let aNeededRooms = getNeededRooms(aArrival, aDeparture);
        console.log(aNeededRooms);
        let iMaxNeedRoom = Math.max(...aNeededRooms);
        if (iMaxNeedRoom < rooms) {
            return true;
        } else {
            return false;
        }
    }
}

export { booker };