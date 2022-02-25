import { NameService } from "."
import { GRPCClient } from "../GRPCClient"

export class GRPCNameClientService extends GRPCClient<NameService> {
  protoPath: string = "proto/nameService.proto"
  packageName: string = "nameService"
  serviceName: string = "NameService"
}
