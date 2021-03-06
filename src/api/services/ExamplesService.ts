import Promise from 'bluebird'
import log from '@utils/logger'

let id = 0
interface Example {
  id: number
  name: string
}

const examples: Example[] = [{ id: id++, name: 'example 0' }, { id: id++, name: 'example 1' }]

export class ExamplesService {
  all(): Promise<Example[]> {
    log.info(examples)
    return Promise.resolve(examples)
  }

  byId(id: number): Promise<Example> {
    log.info(`fetch example with id ${id}`)
    return this.all().then(r => r[id])
  }

  create(name: string): Promise<Example> {
    log.info(`create example with name ${name}`)
    const example: Example = {
      id: id++,
      name
    }
    examples.push(example)
    return Promise.resolve(example)
  }
}

export default new ExamplesService()
