describe('Проверка авторизации', function () {

    it('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click() //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
     })

     it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').click() //Нажал забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввел почту для восстановления
        cy.get('#restoreEmailButton').click() //Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('проверка на негативный кейс авторизации с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio9'); //Ввели НЕверный пароль
        cy.get('#loginButton').click() //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('проверка на негативный кейс авторизации с неправильным логином', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#mail').type('germannn@dolnikov.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click() //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('проверку на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#mail').type('germannndolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click() //Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

    it('проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с строчными буквами в логине
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click() //Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
 }) 