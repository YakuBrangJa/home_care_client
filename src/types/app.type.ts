export type Services = 'gardening' | 'carpentry' | 'plumbing' | 'electrical' | 'cleaning'

export type Urgency = 'low' | 'medium'  | 'high'

export type ServiceStatus =  'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled'

export type WorkerStatus = 'busy' | 'available' | 'on_leave' | 'off_shift'

export interface ServiceDetail {
  _id: string,
  type: Services
  subject: string,
  description: string,
  urgency: Urgency
  status: ServiceStatus
  time: Date
  customerInfo: {
    firstname: string
    lastname: string
    phone: string
    email: string
    address: string
  }
  assignedWorkers: Worker[]
}

export type Worker =  {
  _id: string
  firstname: string
  lastname: string
  expertise: Services
  phone: string
  email: string
  address: string
  status: WorkerStatus
}