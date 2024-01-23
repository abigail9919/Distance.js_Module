const feetToMeters = (feet) => {
    return feet*0.3048
}

const metersToFeet = (meters) => {
    return meters*3.28084
}

const milesToKm = (miles) => {
    return miles*1.60934
}

const kmToMiles = (km) => {
    return km*0.621371
}

exports.calculate = function (unit, value) {
    if (unit == "feet") return feetToMeters(value);
    if (unit == "meters") return metersToFeet(value);
    if (unit == "miles") return milesToKm(value);
    if (unit == "kilometers") return kmToMiles(value);
}
