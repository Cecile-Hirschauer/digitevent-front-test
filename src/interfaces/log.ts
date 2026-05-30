export interface LogEntry {
  type: 'joke' | 'fact'
  content: string
  timestamp: Date
}
