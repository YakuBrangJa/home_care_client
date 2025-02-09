import {Service, Worker} from '@/types/app.type';
import {SERVICE_TYPES, STATUS_LIST, URGENCY_LIST, WORKER_STATUS_LIST} from '@/utils/const';
import {faker} from '@faker-js/faker';


export function createRandomServiceRequests (): Service {
  return {
    _id: faker.string.uuid(),
    serviceType: faker.helpers.arrayElement(['gardening', 'carpentry', 'plumbing', 'electrical', 'cleaning']),
    subject: faker.lorem.sentence({min: 3, max: 13}),
    description: faker.lorem.paragraph({min: 3, max: 12}),
    urgency: faker.helpers.arrayElement(URGENCY_LIST),
    status: faker.helpers.arrayElement(STATUS_LIST),
    requestTime: faker.date.past(),
    assignedTime: faker.date.past(),
    endTime: faker.date.recent(),
    customerInfo: {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      address: faker.location.streetAddress({
        useFullAddress: true
      }),
    },
    assignedWorkers: Array.from({length: Math.floor(Math.random() * 4)}, generateRandomWorker),
    manager: {
      _id: faker.string.uuid(),
      name: faker.person.firstName() + ' ' + faker.person.lastName()
    }
  };
}

export function generateRandomWorker(): Worker {
  return {
    _id: faker.string.uuid(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    birthdate: faker.date.birthdate(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    address: faker.location.streetAddress({
      useFullAddress: true
    }),
    expertise: faker.helpers.arrayElement(SERVICE_TYPES),
    profileImgUrl: faker.image.avatar(),
    time: faker.date.past(),
    status: faker.helpers.arrayElement(WORKER_STATUS_LIST),
  }
}