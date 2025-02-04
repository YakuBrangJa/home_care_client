import {Service} from "@/types/app.type";

export const worker_task_1: Service[] = [
  {
    _id: '3',
    serviceType: 'plumbing',
    subject: 'Pipe Leak Repair',
    description: 'Fix leaking pipes under the kitchen sink, replacing any corroded sections with new pipes to prevent further damage.',
    urgency: 'high',
    status: 'assigned',
    requestTime: new Date('2025-01-27T11:00:00'),
    assignedTime: new Date('2025-01-27T12:00:00'),
    customerInfo: {
      firstname: 'Alice',
      lastname: 'Brown',
      phone: '345-678-9012',
      email: 'alice.brown@example.com',
      address: '789 Maple Dr.',
    },
    assignedWorkers: [
      {
        _id: 'worker2',
        firstname: 'Tyler',
        lastname: 'Smith',
        phone: '987-654-3210',
        email: 'lucas.brown@example.com'
      },
      {
        _id: 'worker6',
        firstname: 'Henry',
        lastname: 'Taylor',
        phone: '555-654-3219',
        email: 'henry.taylor@example.com'
      }
    ],
    managerInstruction: 'Check for any additional leaks in the surrounding pipes and ensure all connections are tight.'
  },
  {
    _id: '5',
    serviceType: 'plumbing',
    subject: 'Deep House Cleaning',
    description: 'Full house cleaning, including carpets, windows, and kitchen appliances, ensuring every corner is spotless.',
    urgency: 'medium',
    status: 'completed',
    requestTime: new Date('2025-01-30T13:45:00'),
    assignedTime: new Date('2025-01-30T15:00:00'),
    customerInfo: {
      firstname: 'Sophie',
      lastname: 'Green',
      phone: '567-890-1234',
      email: 'sophie.green@example.com',
      address: '202 Birch Blvd.',
    },
    assignedWorkers: [
      {
        _id: 'worker2',
        firstname: 'Tyler',
        lastname: 'Smith',
        phone: '987-654-3210',
        email: 'lucas.brown@example.com'
      },
      {
        _id: 'worker3',
        firstname: 'Ella',
        lastname: 'Smith',
        phone: '555-123-4567',
        email: 'ella.smith@example.com'
      }],
    managerInstruction: 'Pay special attention to the kitchen appliances and ensure they are thoroughly cleaned.'
  },
  {
    _id: '7',
    serviceType: 'plumbing',
    subject: 'Wooden Deck Repair',
    description: 'Fix the broken planks on the wooden deck, replace any rotting sections, and ensure the deck is safe and stable.',
    urgency: 'medium',
    status: 'completed',
    requestTime: new Date('2025-01-25T08:30:00'),
    assignedTime: new Date('2025-01-25T10:00:00'),
    customerInfo: {
      firstname: 'Lisa',
      lastname: 'Black',
      phone: '789-012-3456',
      email: 'lisa.black@example.com',
      address: '404 Cherry Ave.',
    },
    assignedWorkers: [
      {
        _id: 'worker2',
        firstname: 'Tyler',
        lastname: 'Smith',
        phone: '987-654-3210',
        email: 'lucas.brown@example.com'
      },
      {
        _id: 'worker4',
        firstname: 'Tom',
        lastname: 'Davis',
        phone: '555-987-6543',
        email: 'tom.davis@example.com'
      }],
    managerInstruction: 'Ensure all repaired sections are sanded and sealed to prevent future rot.'
  },
  {
    _id: '9',
    serviceType: 'plumbing',
    subject: 'Circuit Breaker Repair',
    description: 'Repair or replace malfunctioning circuit breakers to restore power and ensure electrical safety.',
    urgency: 'medium',
    status: 'completed',
    requestTime: new Date('2025-01-24T10:00:00'),
    assignedTime: new Date('2025-01-24T11:30:00'),
    customerInfo: {
      firstname: 'Olivia',
      lastname: 'Clark',
      phone: '901-234-5678',
      email: 'olivia.clark@example.com',
      address: '606 Redwood St.',
    },
    assignedWorkers: [
      {
        _id: 'worker2',
        firstname: 'Tyler',
        lastname: 'Smith',
        phone: '987-654-3210',
        email: 'lucas.brown@example.com'
      },
      {
        _id: 'worker5',
        firstname: 'Jacob',
        lastname: 'Miller',
        phone: '555-321-7654',
        email: 'jacob.miller@example.com'
      },
      {
        _id: 'worker11',
        firstname: 'Emma',
        lastname: 'Harris',
        phone: '123-789-4560',
        email: 'emma.harris@example.com',
      }

    ],
    managerInstruction: 'Test all circuit breakers after repair to ensure they are functioning correctly.'
  },
] 