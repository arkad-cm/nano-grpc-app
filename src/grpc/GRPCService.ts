import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"

export abstract class GRPCService {
  abstract packageName: string
  abstract serviceName: string
  abstract prototypePath: string

  getPrototypalImplementations() {
    const packageDefinition = protoLoader.loadSync(this.prototypePath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })
    const serviceProto: any =
      grpc.loadPackageDefinition(packageDefinition)[this.packageName]
    // Here, classRef is properly inferred to have a `getMessage` method.
    const prototype = Object.getPrototypeOf(this)
    const implementationNames = Object.getOwnPropertyNames(prototype).filter(
      (it) => typeof prototype[it] === "function" && it !== "constructor"
    )
    const callbackImplementations: {
      [k: string]: (
        payload: any,
        callback: (error: any, response: any) => void
      ) => void
    } = {}
    for (const fName of implementationNames) {
      const fn = prototype[fName]
      callbackImplementations[fName] = (payload, cb) => {
        fn(payload.request)
          .then((res: any) => cb(null, res))
          .catch((e: any) => cb(e, null))
      }
    }

    return [serviceProto[this.serviceName].service, callbackImplementations]
  }
}
