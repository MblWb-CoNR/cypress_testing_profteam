describe('Просмотр страницы с вакансиями (с поиском и фильтром)', () => {
    it('Поиск нужной вакансии', () => {

        cy.visit('https://dev.profteam.su/vacancies?start_price=0&end_price=0'); //переход на страницу с вакансиями

        // нейминг вакансии
        cy.get('.form-input--text').type('Таксист');

        // выбор зп "по диапазону"
        cy.get(':nth-child(1) > .radio-component__input').click();

        // выставление диапазона зп
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type(1000);
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(60000);

        //график работы
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();

        //выбор типа графика
        cy.get('.form-select__items > :nth-child(2)').click();


        //тип занятости
        cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click();

        //выбор типа занятости
        cy.get('.form-select__items > :nth-child(2)').click();
    });
});