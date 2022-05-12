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
        backButton: 'Cofnij'
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
        backButton: 'Back'
    },
});