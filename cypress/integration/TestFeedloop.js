describe('Login Test', () => {
    it('Cek Login', () => {
        cy.visit('https://stg-console.qore.sh/');
        cy.get(':nth-child(1) > .relative > .form-input-control')
            .type('rozak@feedloop.io');
        cy.get(':nth-child(1) > .relative > .form-input-control')
            .should('have.value','rozak@feedloop.io');

        //Cek password field is required
        cy.get('.m-0')
            .contains("Password is required");

        //Cek input wrong password
        cy.get('.flex-col.pt-4 > .relative > .form-input-control')
            .type('cek wrong password');
        cy.url("https://stg-console.qore.sh/login");

        // Cek input correct password
        cy.get('.flex-col.pt-4 > .relative > .form-input-control')
            .clear();
        cy.get('.flex-col.pt-4 > .relative > .form-input-control')
            .type("abcd1234");
        cy.get('.bg-blue-600')
            .click();

        //Cek After login
        cy.wait(10000);
        cy.url("https://stg-console.qore.sh/");
        cy.get('.ant-page-header-heading-title > .ant-typography')
            .contains("Workspace");

        cy.get('.h-32')
            .click();
        cy.wait(25000);
        cy.get(':nth-child(1) > .ant-menu-submenu-title > .ant-row > .ant-col-21 > span')
            .click();
        cy.get(':nth-child(1) > .ant-row > .ant-col-21 > .anticon > svg')
            .click();
        cy.get('.sticky > :nth-child(1) > .ant-space-item > .ant-btn')
            .should('be.visible');
    })
})