import {ServiceDetail, Worker} from '@/types/app.type';
import {faker} from '@faker-js/faker';



export function createRandomServiceRequests (): ServiceDetail {
  return {
    _id: faker.string.uuid(),
    type: faker.helpers.arrayElement(['gardening' , 'carpentry' , 'plumbing' , 'electrical' , 'cleaning']),
    subject: faker.lorem.sentence({min: 3, max: 13}),
    description: faker.lorem.paragraph({min: 3, max: 12}),
    urgency: faker.helpers.arrayElement(['low' , 'medium' , 'high']),
    status: faker.helpers.arrayElement(['pending' , 'assigned' , 'in_progress' , 'completed' , 'cancelled']),
    time: faker.date.anytime(),
    customerInfo: {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      address: faker.location.streetAddress({
        useFullAddress: true
      }),
    },
    assignedWorkers: Array.from({length: Math.floor(Math.random() * 4)}, generateRandomWorker)
  };
}

export function generateRandomWorker(): Worker {
  return {
    _id: faker.string.uuid(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    expertise: faker.helpers.arrayElement(['gardening', 'carpentry', 'plumbing', 'electrical', 'cleaning']),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    address: faker.location.streetAddress({
      useFullAddress: true
    }),
    status: faker.helpers.arrayElement(['busy' , 'available' , 'on_leave' , 'off_shift']),
  }
}