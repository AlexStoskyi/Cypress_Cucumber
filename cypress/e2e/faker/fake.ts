import { faker } from '@faker-js/faker';

class Fake {
    userName = faker.internet.userName();
    password = faker.internet.password();
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    postCode = faker.string.numeric(5)
}

export default new Fake();