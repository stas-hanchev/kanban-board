export type ColumnId = 'todo' | 'inProgress' | 'done'

export interface Task {
    id: string
    title: string
    description?: string
}

export interface ColumnData {
    id: ColumnId
    title: string
    tasks: Task[]
}
