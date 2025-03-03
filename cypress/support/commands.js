Cypress.Commands.add('employerLogin', (credentials) => {
    cy.visit('/login')
    cy.get('[data-testid="login-email"]').type(credentials.login)
    cy.get('[data-testid="login-password"]').type(credentials.password)
    cy.get('[data-testid="login-submit"]').click()
    cy.url().should('include', '/dashboard')
});

Cypress.Commands.add('studentLogin', (credentials) => {
    cy.visit('/login')
    cy.get('[data-testid="login-email"]').type(credentials.login)
    cy.get('[data-testid="login-password"]').type(credentials.password)
    cy.get('[data-testid="login-submit"]').click()
    cy.url().should('include', '/student-dashboard')
});

Cypress.Commands.add('createTestNeed', () => {
    // Реализация создания потребности через API
    return cy.request({
        method: 'POST',
        url: '/api/needs',
        body: {
            title: 'Тестовая потребность',
            description: 'Описание тестовой потребности',
            category: 'IT'
        }
    }).then(response => response.body.id)
});