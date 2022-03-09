import { GRPCPrototypes } from "."
import { GRPCService } from "../GRPCService"
import { NameService, NamePayload, ProtoDetail } from "./defs"

export class GRPCNameService extends GRPCService implements NameService {
  config: ProtoDetail = GRPCPrototypes.NAME_PROTO

  async getFormattedString(payload: NamePayload) {
    const { firstName, lastName, middleName } = payload
    return {
      formattedString:
        "Your Formatted String is: " +
        `${firstName} ${middleName ? middleName + " " : ""}${lastName}`,
    }
  }
  async getFullName(payload: NamePayload) {
    const { firstName, middleName, lastName } = payload
    return {
      fullName: `${firstName} ${middleName ? middleName + " " : ""}${lastName}`,
    }
  }
}
