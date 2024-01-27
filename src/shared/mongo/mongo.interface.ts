import { FilterQuery, UpdateQuery } from 'mongoose'

export abstract class MongoRepositoryInterface<T> {
    abstract create(document: T): Promise<T>
    abstract list(): Promise<T[]>
    abstract retrieve(id: string): Promise<T | null>
    abstract search(query: FilterQuery<T>): Promise<T[]>
    abstract update(id: string, update: UpdateQuery<T>): Promise<T>
}
