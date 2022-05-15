import LocalizedStrings from 'react-native-localization';

export let strings = new LocalizedStrings({
    pl: {
        loginPage: "Logowanie",
        registerPage: 'Rejestracja',
        panelPage: 'Panel Użytkownika',
        pass: "Hasło",
        passRepeat: 'Powtórz hasło',
        login: 'Zaloguj',
        register: 'Załóż konto',
        failedRegisterMessage: 'Hasła nie są identyczne',
        logout: 'Wyloguj',
        backButton: 'Cofnij',
        wrongPassword: 'Nieprawidłowe hasło',
        wrongEmail: 'Niepoprawny email',
        loginError: 'Błąd logowania, spróbuj ponownie',
        unknownError: 'Nieznany błąd, spróbuj ponownie',
        registerError: 'Błąd rejestracji, spróbuj ponownie',
        emailInUse: 'Istnieje konto o podanym adresie Email',
        unknownRegisterError: 'Nieznany błąd rejestracji, spróbuj ponownie'
    },
    en: {
        loginPage: "Login",
        registerPage: 'Register Account',
        panelPage: 'User Panel',
        pass: "Password",
        passRepeat: 'Confirm password',
        login: 'Login',
        register: 'Register',
        failedRegisterMessage: 'Passwords are not equal',
        logout: 'Logout',
        backButton: 'Back',
        wrongPassword: 'Wrong password',
        wrongEmail: 'Wrong email',
        loginError: 'Login error, please try again',
        unknownError: 'Unknown error, please try again',
        registerError: 'Register error, please try again',
        emailInUse: 'Email already in use',
        unknownRegisterError: 'Unknow register error, please try again'
    },
});