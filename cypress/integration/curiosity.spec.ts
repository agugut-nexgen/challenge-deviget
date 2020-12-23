import curiosityHelpers from '../support/helpers/curiosity.helpers';

describe('API CURIOSITY TESTS', () => {
    it('Retrieve the first 10 Mars photos made by "Curiosity" on 1000 Martian sol', () => {
        // Get Photos by mars sol
        curiosityHelpers.getPhotosByMarsSol(1000).then((marsSolPhotos) => {
            // Filter first ten photos
            const firstTenPhotos = marsSolPhotos.slice(0, 10).map((photo, index) => {
                return `Photo Number: ${index + 1} - Source: ${photo.img_src}`;
            });
            // Check that array has ten photos
            cy.wrap(firstTenPhotos).should('have.length', 10);
            Cypress._.each(firstTenPhotos, (photo) => {
                // Log Each photo src
                cy.log(photo);
            });
        });
    });

    it('Retrieve the first 10 Mars photos made by "Curiosity" on Earth date equal to 1000 Martian sol', () => {
        // Get earth date from martian date
        curiosityHelpers.getPhotosByMarsSol(1000).then((marsSolPhotos) => {
            const earthDate = marsSolPhotos[0].earth_date;
            // Get photos by earth day
            curiosityHelpers.getPhotosByEarthDay(earthDate).then((earthDayPhotos) => {
                // Filter first ten photos
                const firstTenPhotos = earthDayPhotos.slice(0, 10).map((photo, index) => {
                    return `Photo Number: ${index + 1} - Source: ${photo.img_src}`;
                });
                // Check that array has ten photos
                cy.wrap(firstTenPhotos).should('have.length', 10);
                Cypress._.each(firstTenPhotos, (photo) => {
                    // Log Each photo src
                    cy.log(photo);
                });
            });
        });
    });

    it('Retrieve and compare the first 10 Mars photos made by "Curiosity" on 1000 sol and on Earth date equal to 1000 Martian sol.', () => {
        // Get Photos by martin sol
        curiosityHelpers.getPhotosByMarsSol(1000).then((marsSolPhotos) => {
            const earthDate = marsSolPhotos[0].earth_date;
            // Get photos by earth day
            curiosityHelpers.getPhotosByEarthDay(earthDate).then((earthDayPhotos) => {
                // Compare that both arrays are equal
                cy.wrap(marsSolPhotos).should('deep.equal', earthDayPhotos);
            });
        });
    });
});
