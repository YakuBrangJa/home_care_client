import {ServiceType, ServiceStatus, Urgency, WorkerStatus} from "@/types/app.type"

export const STATUS_LIST: ServiceStatus[] = ["pending", "assigned", "in-progress", "completed", "cancelled"]
export const URGENCY_LIST: Urgency[] = ['low', 'medium', 'high']

export const SERVICE_TYPES: ServiceType[] = ['gardening', 'carpentry', 'plumbing', 'electrical', 'cleaning']

export const WORKER_STATUS_LIST: WorkerStatus[] = ['assigned', 'on-site', 'available']


export const URGENCY_COLOR = {
  low: '#8EBAE5',
  medium: '#AF7AC5',
  high: '#E74C3C'
}