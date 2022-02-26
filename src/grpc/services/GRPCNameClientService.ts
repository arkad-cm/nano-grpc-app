import { GRPCPrototypes, NameService } from "."
import { GRPCClient } from "../GRPCClient"
import { ProtoDetail } from "./defs"

export class GRPCNameClientService extends GRPCClient<NameService> {
  config: ProtoDetail = GRPCPrototypes.NAME_SERVICE
}
