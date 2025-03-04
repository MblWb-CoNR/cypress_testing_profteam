const log = (message) => cy.log(message);

const loginForm = {
    username: () => cy.get('input[autocomplete="username"]'),
    password: () => cy.get('input[autocomplete="current-password"]'),
    submit: () => cy.get('button[type="submit"]')
} // проверка входа

const createNeedForm = {
    openModal: () => cy.get('.needs-block__filters-wrapper > .button'),
    name: () => cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text'),
    priceType: (id) => cy.get(`.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(${id})`),
    minPrice: () => cy.get(':nth-child(1) > .form-control--responsive > .form-input--number'),
    maxPrice: () => cy.get(':nth-child(2) > .form-control--responsive > .form-input--number'),
    fixPrice: () => cy.get('.form-input--number'),
    responsibilities: () => cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area'),
    requirements: () => cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area'),
    selectEmployment: (id) => {
        cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected').click().wait(1000)
        return cy.get(`.form-select__items > :nth-child(${id})`)
            .click()
    },
    submit: () => cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button'),
}

