export const customer_history_1 = [
  {
    _id: "1",
    serviceType: "plumbing",
    subject: "Pipe Leakage in Kitchen",
    description:
      "The kitchen sink pipe has developed a severe leakage, causing water to pool under the sink. The issue has persisted for over a week and needs urgent attention. The customer suspects a broken joint or a clogged pipe leading to excessive pressure buildup. Immediate repair is required to prevent further damage to the wooden cabinet below.",
    urgency: "high",
    status: "completed",
    requestTime: new Date("2025-02-01T10:30:00Z"),
    customerInfo: {
      _id: "1001",
      name: "John Doe",
      contact: "+123456789",
      address: "45 Maple Street, Springfield",
    },
    assignedWorkers: [],
    manager: null,
    managerInstruction: "",
  },
  {
    _id: "2",
    serviceType: "electrical",
    subject: "Frequent Power Outages in Living Room",
    description:
      "The living room's power keeps cutting out intermittently. The customer has checked the circuit breaker, but the issue persists. There might be faulty wiring or an overload causing the trips. A thorough inspection of the electrical panel and wiring system is needed to diagnose and resolve the issue.",
    urgency: "medium",
    status: "completed",
    requestTime: new Date("2025-02-02T08:15:00Z"),
    assignedTime: new Date("2025-02-02T09:00:00Z"),
    customerInfo: {
      _id: "1002",
      name: "Alice Smith",
      contact: "+198765432",
      address: "23 Oakwood Avenue, New York",
    },
    assignedWorkers: [
      {
        _id: "W001",
        firstname: "David",
        lastname: "Brown",
        phone: "+198765431",
        email: "david.brown@example.com",
      },
    ],
    manager: {
      _id: "M101",
      name: "Michael Johnson",
      role: "Supervisor",
    },
    managerInstruction:
      "Ensure proper grounding and test the outlets for voltage fluctuations.",
  },
  {
    _id: "3",
    serviceType: "cleaning",
    subject: "Deep Cleaning for Apartment",
    description:
      "The customer has recently moved into a new apartment and requires a thorough deep cleaning service. The request includes dusting, vacuuming, mopping, and sanitization of all rooms, including kitchen and bathrooms. Special attention needs to be given to the carpet stains and kitchen grease buildup.",
    urgency: "low",
    status: "completed",
    requestTime: new Date("2025-01-29T14:45:00Z"),
    assignedTime: new Date("2025-01-30T10:00:00Z"),
    endTime: new Date("2025-01-30T15:30:00Z"),
    customerInfo: {
      _id: "1003",
      name: "Emma Wilson",
      contact: "+1122334455",
      address: "789 Sunset Blvd, Los Angeles",
    },
    assignedWorkers: [
      {
        _id: "W002",
        firstname: "Sarah",
        lastname: "Connor",
        phone: "+112233441",
        email: "sarah.connor@example.com",
      },
      {
        _id: "W003",
        firstname: "Tom",
        lastname: "Hardy",
        phone: "+112233442",
        email: "tom.hardy@example.com",
      },
    ],
    manager: {
      _id: "M102",
      name: "Rachel Green",
      role: "Operations Manager",
    },
    managerInstruction:
      "Use eco-friendly cleaning agents and ensure proper ventilation after sanitization.",
  },
  {
    _id: "4",
    serviceType: "carpentry",
    subject: "Broken Wardrobe Door Fix",
    description:
      "One of the sliding doors in the customer's wardrobe has come off its tracks. The door is heavy, making it difficult to realign without professional help. The rollers might be damaged and need replacement. The customer also requests checking the other door for possible alignment issues to prevent future damage.",
    urgency: "medium",
    status: "completed",
    requestTime: new Date("2025-02-03T11:20:00Z"),
    customerInfo: {
      _id: "1004",
      name: "Robert Martinez",
      contact: "+1555666777",
      address: "456 Birch Road, Chicago",
    },
    assignedWorkers: [],
    manager: null,
    managerInstruction: "",
  },
  {
    _id: "5",
    serviceType: "gardening",
    subject: "Lawn Maintenance and Tree Trimming",
    description:
      "The customer's backyard lawn is overgrown and requires professional trimming. Additionally, there are a few trees with branches extending dangerously close to power lines, posing a safety risk. The customer requests a full lawn care service, including mowing, weeding, and hedge trimming.",
    urgency: "high",
    status: "completed",
    requestTime: new Date("2025-02-04T07:45:00Z"),
    assignedTime: new Date("2025-02-04T09:30:00Z"),
    customerInfo: {
      _id: "1005",
      name: "Sophia Lee",
      contact: "+1444555666",
      address: "32 Greenfield Lane, Miami",
    },
    assignedWorkers: [
      {
        _id: "W004",
        firstname: "Jake",
        lastname: "Johnson",
        phone: "+144455561",
        email: "jake.johnson@example.com",
      },
    ],
    manager: {
      _id: "M103",
      name: "Chris Evans",
      role: "Field Supervisor",
    },
    managerInstruction:
      "Prioritize trimming near the power lines and ensure waste disposal after the work.",
  },
];

