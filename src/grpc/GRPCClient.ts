import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"

export abstract class GRPCClient<T> {
  abstract protoPath: string
  abstract packageName: string
  abstract serviceName: string
  private client: any

  constructor(private host = "0.0.0.0", private port = 50001) {}

  getClient(): T {
    const packageDefinition = protoLoader.loadSync(this.protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })
    const service: any =
      grpc.loadPackageDefinition(packageDefinition)[this.packageName]

    this.client = new service[this.serviceName](
      this.host + ":" + this.port,
      grpc.credentials.createInsecure()
    )

    return this.transformedClient(
      Object.getOwnPropertyNames(Object.getPrototypeOf(this.client)).filter(
        (it) => it !== "constructor"
      )
    )
  }
  transformedClient(methodNames: string[]): T {
    const promifiedMethods: { [k: string]: (payload: any) => Promise<any> } = {}
    for (const mName of methodNames) {
      promifiedMethods[mName] = async (payload: any) => {
        return new Promise((resolve, reject) => {
          this.client[mName](payload, (err: any, response: any) => {
            if (err) {
              reject(err)
            } else {
              resolve(response)
            }
          })
        })
      }
    }
    return promifiedMethods as unknown as T
  }
}
