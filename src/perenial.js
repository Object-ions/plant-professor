export default class PlantService {
    static getPlantByName(plantSearch) {
        fetch(`https://perenual.com/api/species-list?q=${plantSearch}&key=${process.env.API_KEY}`)
            .then(function(response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function(error) {
                return error;
            });
    }

    static getPlantListFromSelectors(cycleInput, sunlightInput, wateringInput) {
        fetch(`https://perenual.com/api/species-list?key=${process.env.API_KEY}&cycle=${cycleInput}&sunlight=${sunlightInput}&watering=${wateringInput}`)
            .then(function(response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function(error) {
                return error;
            });
    }

    static getPlantInfo(plantID){
        fetch(`https://perenual.com/api/species/details/${plantID}?key=${process.env.API_KEY}`)
            .then(function(response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function(error) {
                return error;
            });
    }

    
}