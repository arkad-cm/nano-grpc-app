import { GRPCService } from "../GRPCService"
import { NameService, NamePayload } from "./defs"

export class GRPCNameService extends GRPCService implements NameService {
  packageName: string = "nameService"
  serviceName: string = "NameService"
  prototypePath: string = "proto/nameService.proto"

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
