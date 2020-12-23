import { ICuriosityPhotosResponse } from './curiosity.interfaces';

/**
 * Get Photos by Mars Sol
 * @param   solNumber to get photos
 * @returns photos by the mars sol
 */
function getPhotosByMarsSol(solNumber: number): Cypress.Chainable<ICuriosityPhotosResponse[]> {
    return cy.request(`${Cypress.config().baseUrl}sol=${solNumber}=&api_key=${Cypress.env('API_KEY')}`).then((resp) => {
        return resp.body.photos as ICuriosityPhotosResponse[];
    });
}

/**
 * Get Photos by Earth Day
 * @param   earthDay to get photos
 * @returns photos by the mars sol
 */
function getPhotosByEarthDay(earthDay: string): Cypress.Chainable<ICuriosityPhotosResponse[]> {
    return cy
        .request(`${Cypress.config().baseUrl}earth_date=${earthDay}=&api_key=${Cypress.env('API_KEY')}`)
        .then((resp) => {
            return resp.body.photos as ICuriosityPhotosResponse[];
        });
}

export default { getPhotosByMarsSol, getPhotosByEarthDay };
