import { LoginOperations } from "../../business-operations/UI/login.operations";

let loginOperations;

fixture`Pruebas de Login`
    .before(async () => {
        loginOperations = new LoginOperations();
    })

    .beforeEach(async t => {
        await t.navigateTo("https://the-internet.herokuapp.com/login");
    });

// Test para Login Correcto
test('Login exitoso con credenciales correctas', async () => {
    await loginOperations.validateCorrectLogin();
});

// Test para Login Incorrecto
test('Login fallido con credenciales incorrectas', async () => {
    await loginOperations.validateFailedLogin();
});