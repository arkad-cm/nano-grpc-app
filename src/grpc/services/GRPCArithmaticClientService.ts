import { ArithmaticService } from "."
import { GRPCClient } from "../GRPCClient"

export class GRPCArithmaticClientService extends GRPCClient<ArithmaticService> {
  protoPath: string = "proto/arithmaticService.proto"
  packageName: string = "arithmaticService"
  serviceName: string = "ArithmaticService"
}
