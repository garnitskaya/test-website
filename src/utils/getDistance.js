import * as geolib from "geolib";

export const getDistance = (from, to) => {
    const start = {
        latitude: parseFloat(from.latitude),
        longitude: parseFloat(from.longitude),
    };

    const end = {
        latitude: parseFloat(to.latitude),
        longitude: parseFloat(to.longitude),
    };

    const distance = geolib.getPreciseDistance(start, end);
    const convertedDistance = geolib.convertDistance(distance, "km");

    return convertedDistance;
};
