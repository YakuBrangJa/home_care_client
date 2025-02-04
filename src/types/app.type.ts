
export type ServiceType = 'gardening' | 'carpentry' | 'plumbing' | 'electrical' | 'cleaning'

export type Urgency = 'low' | 'medium'  | 'high'

export type ServiceStatus = 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled'

export type WorkerStatus = 'assigned' | 'on-site' | 'available' 

export interface Service {
  _id: string,
  serviceType: ServiceType
  subject: string,
  description: string,
  urgency: Urgency
  status: ServiceStatus
  requestTime: Date
  assignedTime?: Date,
  endTime?: Date,
  customerInfo: CustomerInfo
  assignedWorkers?: AssignedWorker[]
  manager?: {
    _id: string,
    name: string,
    role?: string,
  },
  managerInstruction?: string
}

export type CustomerInfo = {
  firstname: string
  lastname: string
  phone: string
  email: string
  address: string
}

export type Worker =  {
  _id: string
  firstname: string
  lastname: string
  birthdate: Date,
  phone: string
  email: string
  address: string
  time: Date,
  profileImgUrl: string,
  expertise: ServiceType
  status: WorkerStatus
}

export type AssignedWorker = {
  _id: string,
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
}