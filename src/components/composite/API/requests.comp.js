chai = require("chai");
chaiHttp = require('chai-http');
chai.use(chaiHttp);

export class ApiRequestsComp {
    urlBase;

    constructor() {
        this.urlBase = "https://jsonplaceholder.typicode.com";
    }

    async getRequest(url) {
        return chai.request(this.urlBase)
            .get(url);
    }

    async postRequest(url, body) {
        const response = await chai.request(this.urlBase)
            .post(url)
            .send(body);
        return response;
    }

    async putRequest(url) {
        const response = await chai.request(this.urlBase)
            .put(url)
            .send(updatedPost);
        return response;
    }

    async deleteRequest(url) {
        return chai.request(this.urlBase)
            .delete(url);
    }
}