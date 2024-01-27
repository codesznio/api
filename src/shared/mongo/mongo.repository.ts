import { FilterQuery, Model, UpdateQuery, AnyKeys } from 'mongoose'

// Interface
import { MongoRepositoryInterface } from './mongo.interface'

export class MongoRepository<T extends Document> implements MongoRepositoryInterface<T> {
    constructor(
        private readonly _repository: Model<T>,
        private _populateOnFind: string[] = []
    ) {}

    async create(data: AnyKeys<T>): Promise<T> {
        try {
            return await this._repository.create(data)
        } catch (err) {
            throw new Error(err)
        }
    }

    async list(): Promise<T[]> {
        try {
            return await this._repository.find().populate(this._populateOnFind).exec()
        } catch (error) {
            throw error
        }
    }

    async retrieve(id: string): Promise<T | null> {
        try {
            const entity = await this._repository.findById(id)

            return entity ? await entity.populate(this._populateOnFind) : null
        } catch (error) {
            throw error
        }
    }

    async search(query: FilterQuery<T>): Promise<T[]> {
        try {
            return await this._repository.find(query).populate(this._populateOnFind).exec()
        } catch (error) {
            throw error
        }
    }

    async update(id: string, update: UpdateQuery<T>): Promise<T> {
        try {
            return await this._repository
                .findByIdAndUpdate(id, update, {
                    new: true,
                    timestamps: true,
                })
                .exec()
        } catch (error) {
            throw error
        }
    }
}
