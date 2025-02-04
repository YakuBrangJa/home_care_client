import {Service} from "@/types/app.type";

export const service_requests_1: Service[] = [
  {
    _id: '1',
    serviceType: 'gardening',
    subject: 'Lawn Mowing',
    description: 'Mowing both the front and backyard lawns, trimming the edges, and removing any weeds in the lawn.',
    urgency: 'medium',
    status: 'pending',
    requestTime: new Date('2025-02-01T10:00:00'),
    customerInfo: {
      firstname: 'John',
      lastname: 'Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      address: '123 Elm St.',
    },
  },
  {
    _id: '2',
    serviceType: 'carpentry',
    subject: 'Cabinet Installation',
    description: 'Install custom kitchen cabinets, ensuring the design fits the available space and the installation is secure.',
    urgency: 'high',
    status: 'assigned',
    requestTime: new Date('2025-01-28T14:30:00'),
    assignedTime: new Date('2025-01-29T09:00:00'),
    customerInfo: {
      firstname: 'Jane',
      lastname: 'Smith',
      phone: '234-567-8901',
      email: 'jane.smith@example.com',
      address: '456 Oak Ave.',
    },
    assignedWorkers: [
      {
        _id: 'worker1',
        firstname: 'John',
        lastname: 'Cena',
        phone: '123-456-7890',
        email: 'you.cannot.seeme@example.com'
      },
      {
        _id: 'worker1',
        firstname: 'Mark',
        lastname: 'Johnson',
        phone: '123-456-7890',
        email: 'mark.johnson@example.com'
      },
      {
        _id: 'worker6',
        firstname: 'Henry',
        lastname: 'Taylor',
        phone: '555-654-3219',
        email: 'henry.taylor@example.com'
      }
    ],
    managerInstruction: 'Ensure the cabinets are aligned perfectly and securely fastened.'
  },
  {
    _id: '3',
    serviceType: 'plumbing',
    subject: 'Pipe Leak Repair',
    description: 'Fix leaking pipes under the kitchen sink, replacing any corroded sections with new pipes to prevent further damage.',
    urgency: 'high',
    status: 'in-progress',
    requestTime: new Date('2025-01-27T11:00:00'),
    assignedTime: new Date('2025-01-27T12:00:00'),
    customerInfo: {
      firstname: 'Alice',
      lastname: 'Brown',
      phone: '345-678-9012',
      email: 'alice.brown@example.com',
      address: '789 Maple Dr.',
    },
    assignedWorkers: [{
      _id: 'worker2',
      firstname: 'Lucas',
      lastname: 'Brown',
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
    _id: '4',
    serviceType: 'electrical',
    subject: 'Light Fixture Replacement',
    description: 'Replace broken or outdated light fixtures with modern, energy-efficient LED fixtures.',
    urgency: 'low',
    status: 'pending',
    requestTime: new Date('2025-02-02T09:30:00'),
    customerInfo: {
      firstname: 'Carlos',
      lastname: 'Lee',
      phone: '456-789-0123',
      email: 'carlos.lee@example.com',
      address: '101 Pine Ln.',
    },
  },
  {
    _id: '5',
    serviceType: 'cleaning',
    subject: 'Deep House Cleaning',
    description: 'Full house cleaning, including carpets, windows, and kitchen appliances, ensuring every corner is spotless.',
    urgency: 'medium',
    status: 'assigned',
    requestTime: new Date('2025-01-30T13:45:00'),
    assignedTime: new Date('2025-01-30T15:00:00'),
    customerInfo: {
      firstname: 'Sophie',
      lastname: 'Green',
      phone: '567-890-1234',
      email: 'sophie.green@example.com',
      address: '202 Birch Blvd.',
    },
    assignedWorkers: [{
      _id: 'worker3',
      firstname: 'Ella',
      lastname: 'Smith',
      phone: '555-123-4567',
      email: 'ella.smith@example.com'
    }],
    managerInstruction: 'Pay special attention to the kitchen appliances and ensure they are thoroughly cleaned.'
  },
  {
    _id: '6',
    serviceType: 'gardening',
    subject: 'Tree Trimming',
    description: 'Trim overgrown branches and remove dead wood from trees to ensure healthy growth and improve the appearance of the yard.',
    urgency: 'low',
    status: 'pending',
    requestTime: new Date('2025-02-03T16:00:00'),
    customerInfo: {
      firstname: 'Michael',
      lastname: 'White',
      phone: '678-901-2345',
      email: 'michael.white@example.com',
      address: '303 Cedar St.',
    },
  },
  {
    _id: '7',
    serviceType: 'carpentry',
    subject: 'Wooden Deck Repair',
    description: 'Fix the broken planks on the wooden deck, replace any rotting sections, and ensure the deck is safe and stable.',
    urgency: 'medium',
    status: 'in-progress',
    requestTime: new Date('2025-01-25T08:30:00'),
    assignedTime: new Date('2025-01-25T10:00:00'),
    customerInfo: {
      firstname: 'Lisa',
      lastname: 'Black',
      phone: '789-012-3456',
      email: 'lisa.black@example.com',
      address: '404 Cherry Ave.',
    },
    assignedWorkers: [{
      _id: 'worker4',
      firstname: 'Tom',
      lastname: 'Davis',
      phone: '555-987-6543',
      email: 'tom.davis@example.com'
    }],
    managerInstruction: 'Ensure all repaired sections are sanded and sealed to prevent future rot.'
  },
  {
    _id: '8',
    serviceType: 'plumbing',
    subject: 'Water Heater Installation',
    description: 'Install a new, energy-efficient water heater in the basement, ensuring proper connections and settings.',
    urgency: 'high',
    status: 'pending',
    requestTime: new Date('2025-01-22T12:30:00'),
    customerInfo: {
      firstname: 'Ethan',
      lastname: 'King',
      phone: '890-123-4567',
      email: 'ethan.king@example.com',
      address: '505 Willow Rd.',
    },
  },
  {
    _id: '9',
    serviceType: 'electrical',
    subject: 'Circuit Breaker Repair',
    description: 'Repair or replace malfunctioning circuit breakers to restore power and ensure electrical safety.',
    urgency: 'medium',
    status: 'assigned',
    requestTime: new Date('2025-01-24T10:00:00'),
    assignedTime: new Date('2025-01-24T11:30:00'),
    customerInfo: {
      firstname: 'Olivia',
      lastname: 'Clark',
      phone: '901-234-5678',
      email: 'olivia.clark@example.com',
      address: '606 Redwood St.',
    },
    assignedWorkers: [{
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
  {
    _id: '10',
    serviceType: 'cleaning',
    subject: 'Carpet Cleaning',
    description: 'Deep clean the living room carpet, remove stains, and ensure the fabric is fresh and clean.',
    urgency: 'low',
    status: 'pending',
    requestTime: new Date('2025-01-20T17:15:00'),
    customerInfo: {
      firstname: 'Emma',
      lastname: 'Harris',
      phone: '123-789-4560',
      email: 'emma.harris@example.com',
      address: '707 Maple Dr.',
    },
  },
  {
    _id: '11',
    serviceType: 'gardening',
    subject: 'Garden Maintenance',
    description: 'Regular maintenance, including weeding, mulching, and seasonal plant care.',
    urgency: 'medium',
    status: 'in-progress',
    requestTime: new Date('2025-01-18T09:00:00'),
    assignedTime: new Date('2025-01-19T10:00:00'),
    customerInfo: {
      firstname: 'Charlotte',
      lastname: 'King',
      phone: '234-890-5671',
      email: 'charlotte.king@example.com',
      address: '808 Pine Blvd.',
    },
    assignedWorkers: [{
      _id: 'worker6',
      firstname: 'Henry',
      lastname: 'Taylor',
      phone: '555-654-3219',
      email: 'henry.taylor@example.com'
    }],
    managerInstruction: 'Ensure all plants are properly mulched and watered after maintenance.'
  },
  {
    _id: '12',
    serviceType: 'carpentry',
    subject: 'Furniture Assembly',
    description: 'Assemble a new bedroom set, including a bed frame, dresser, and nightstand.',
    urgency: 'low',
    status: 'assigned',
    requestTime: new Date('2025-01-23T11:30:00'),
    assignedTime: new Date('2025-01-23T14:00:00'),
    customerInfo: {
      firstname: 'George',
      lastname: 'Miller',
      phone: '345-901-6782',
      email: 'george.miller@example.com',
      address: '909 Cedar Ln.',
    },
    assignedWorkers: [{
      _id: 'worker7',
      firstname: 'Alice',
      lastname: 'Martinez',
      phone: '555-432-8765',
      email: 'alice.martinez@example.com'
    }],
    managerInstruction: 'Ensure all furniture pieces are assembled according to the provided instructions and are stable.'
  },
  {
    _id: '13',
    serviceType: 'plumbing',
    subject: 'Toilet Repair',
    description: 'Fix the clog in the bathroom toilet and ensure proper flushing.',
    urgency: 'high',
    status: 'pending',
    requestTime: new Date('2025-01-21T14:45:00'),
    customerInfo: {
      firstname: 'Mason',
      lastname: 'Hall',
      phone: '456-789-0123',
      email: 'mason.hall@example.com',
      address: '1001 Oak Ave.',
    },
  },
  {
    _id: '14',
    serviceType: 'electrical',
    subject: 'Electrical Outlet Installation',
    description: 'Install additional electrical outlets in the living room for convenience.',
    urgency: 'low',
    status: 'pending',
    requestTime: new Date('2025-01-29T12:00:00'),
    customerInfo: {
      firstname: 'Zoe',
      lastname: 'Adams',
      phone: '567-890-1234',
      email: 'zoe.adams@example.com',
      address: '1022 Birch Rd.',
    },
  },
];