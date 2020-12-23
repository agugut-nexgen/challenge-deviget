import { IMarsRoverPhotosResponse } from './mars.rover.interfaces';

/**
 * Get Photos by Mars Sol
 * @param   camera to retrieve photos
 * @param   solNumber to get photos
 * @returns photos by the mars sol
 */
function getPhotosByMarsSol(camera: string, solNumber: number): Cypress.Chainable<IMarsRoverPhotosResponse[]> {
    return cy
        .request(
            `${Cypress.config().baseUrl}${camera}${Cypress.env('PHOTOS')}sol=${solNumber}=&api_key=${Cypress.env(
                'API_KEY'
            )}`
        )
        .then((resp) => {
            return resp.body.photos as IMarsRoverPhotosResponse[];
        });
}

/**
 * Get Photos by Earth Day
 * @param   camera to retrieve photos
 * @param   earthDay to get photos
 * @returns photos by the mars sol
 */
function getPhotosByEarthDay(camera: string, earthDay: string): Cypress.Chainable<IMarsRoverPhotosResponse[]> {
    return cy
        .request(
            `${Cypress.config().baseUrl}${camera}${Cypress.env('PHOTOS')}earth_date=${earthDay}=&api_key=${Cypress.env(
                'API_KEY'
            )}`
        )
        .then((resp) => {
            return resp.body.photos as IMarsRoverPhotosResponse[];
        });
}

export default { getPhotosByMarsSol, getPhotosByEarthDay };
