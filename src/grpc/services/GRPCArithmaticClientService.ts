import { ArithmaticService, GRPCPrototypes } from "."
import { GRPCClient } from "../GRPCClient"
import { ProtoDetail } from "./defs"

export class GRPCArithmaticClientService extends GRPCClient<ArithmaticService> {
  config: ProtoDetail = GRPCPrototypes.ARITHMATIC_SERVICE
}
