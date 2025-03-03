describe('Модуль "Потребности"', () => {
    const employerCredentials = {
        login: 'employer@example.com',
        password: 'EmployerPass123'
    };

    const studentCredentials = {
        login: 'student@example.com',
        password: 'StudentPass123'
    };

    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    });

    context('Создание потребности работодателем', () => {
        it('Успешное создание новой потребности', () => {
            // Авторизация работодателя
            cy.employerLogin(employerCredentials)

            // Переход к созданию потребности
            cy.get('[data-testid="create-need-button"]').click()

            // Заполнение формы
            cy.fixture('needData').then(data => {
                cy.get('[data-testid="need-title"]').type(data.title)
                cy.get('[data-testid="need-description"]').type(data.description)
                cy.get('[data-testid="need-category"]').select(data.category)
                cy.get('[data-testid="need-deadline"]').type(data.deadline)
            })

            // Отправка формы
            cy.get('[data-testid="submit-need"]').click()

            // Проверка создания
            cy.contains('Потребность успешно создана').should('exist')
            cy.get('[data-testid="needs-list"]').should('contain', 'Тестовая потребность')
        });
    });

    context('Просмотр и фильтрация потребностей', () => {
        it('Поиск и фильтрация потребностей', () => {
            // Авторизация студента
            cy.studentLogin(studentCredentials)

            // Поиск потребности
            cy.get('[data-testid="search-input"]').type('Тестовая')
            cy.get('[data-testid="filter-category"]').select('IT')
            cy.get('[data-testid="apply-filters"]').click()

            // Проверка результатов
            cy.get('[data-testid="needs-list"] > div').should('have.length.at.least', 1)
        });
    });

    context('Отклик и подтверждение', () => {
        let needId;

        before(() => {
            // Создание тестовой потребности
            cy.createTestNeed()
                .then(id => needId = id)
        });

        it('Отклик студента на потребность', () => {
            // Авторизация студента
            cy.studentLogin(studentCredentials)

            // Отклик на потребность
            cy.visit(`/needs/${needId}`)
            cy.get('[data-testid="respond-button"]').click()
            cy.get('[data-testid="response-message"]').type('Хочу участвовать!')
            cy.get('[data-testid="submit-response"]').click()

            // Проверка отклика
            cy.contains('Отклик успешно отправлен').should('exist')
        });

        it('Подтверждение отклика работодателем', () => {
            // Авторизация работодателя
            cy.employerLogin(employerCredentials)

            // Проверка откликов
            cy.visit(`/needs/${needId}/responses`)
            cy.get('[data-testid="response-item"]').first()
                .find('[data-testid="approve-button"]').click()

            // Проверка статуса
            cy.get('[data-testid="response-status"]').should('contain', 'Подтверждено')
        });
    });

    context('Рабочее пространство', () => {
        it('Взаимодействие и смена статуса', () => {
            // Авторизация работодателя
            cy.employerLogin(employerCredentials)

            // Переход в рабочее пространство
            cy.visit('/workspace/123')

            // Отправка сообщения
            cy.get('[data-testid="message-input"]').type('Привет! Как дела?')
            cy.get('[data-testid="send-message"]').click()

            // Смена статуса
            cy.get('[data-testid="status-select"]').select('completed')
            cy.contains('Статус успешно обновлен').should('exist')
        });
    });
});
