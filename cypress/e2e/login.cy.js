describe('Тестирование формы логина и пароля', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти доступна
        cy.get('#loginButton').click(); //клик кнопки войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })


    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#forgotEmailButton').click(); //клик кнопки забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //верный валидный e-mail
        cy.get('#restoreEmailButton').click(); //клик кнопки отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })


    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1234'); //неверный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти доступна
        cy.get('#loginButton').click(); //клик кнопки войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })

  
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('negerman@dolnikov.ru'); //неверный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти доступна
        cy.get('#loginButton').click(); //клик кнопки войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })


    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); //Логин без @
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти доступна
        cy.get('#loginButton').click(); //клик кнопки войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })


    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти доступна
        cy.get('#loginButton').click(); //клик кнопки войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
  })

})
