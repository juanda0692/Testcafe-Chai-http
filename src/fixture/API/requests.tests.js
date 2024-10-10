import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;
chai.use(chaiHttp);

const apiBaseURL = 'https://jsonplaceholder.typicode.com';

fixture`API Testing with TestCafe`
    .page(apiBaseURL);

test('GET request', async t => {
    const response = await chai.request(apiBaseURL).get('/posts/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id', 1);
});