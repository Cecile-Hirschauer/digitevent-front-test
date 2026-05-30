export interface LogEntry {
  id: number
  type: 'joke' | 'fact'
  content: string
  timestamp: number
}
