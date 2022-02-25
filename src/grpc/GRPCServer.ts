import * as grpc from "@grpc/grpc-js"
import { GRPCService } from "./GRPCService"

export class GRPCServer {
  constructor(private server = new grpc.Server()) {}

  addService(grpcService: GRPCService) {
    const [protoService, implementations] =
      grpcService.getPrototypalImplementations()
    this.server.addService(protoService, implementations)
  }

  listen(host = "0.0.0.0", port = 50001) {
    this.server.bindAsync(
      host + ":" + port,
      grpc.ServerCredentials.createInsecure(),
      () => {
        this.server.start()
      }
    )
    console.log("GRPC Server listening on PORT", port)
  }
}
