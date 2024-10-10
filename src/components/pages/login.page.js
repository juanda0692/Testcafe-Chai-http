import { Selector } from "testcafe";

export class LoginPage {
    _title;
    _usernameInput;
    _passwordInput;
    _loginButton;
    _errorMessage;

    constructor() {
        this._title = Selector("h2");
        this._passwordInput = Selector("#password");
        this._usernameInput = Selector("#username");
        this._loginButton = Selector(".radius");
        this._errorMessage = Selector("#flash");
        this._secureArea = Selector("h2");
        this._secureAreaMessage = Selector("#flash");
    }

    get title() {
        return this._title;
    }

    get usernameInput() {
        return this._usernameInput;
    }

    get passwordInput() {
        return this._passwordInput;
    }

    get loginButton() {
        return this._loginButton;
    }

    get errorMessage() {
        return this._errorMessage;
    }

    get secureArea() {
        return this._secureArea;
    }

    get secureAreaMessage() {
        return this._secureAreaMessage;
    }

}