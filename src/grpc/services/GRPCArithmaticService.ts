import { GRPCService } from "../GRPCService"
import { ArithmaticService, CalculationRequest } from "./defs"

export class GRPCArithmaticService
  extends GRPCService
  implements ArithmaticService
{
  packageName: string = "arithmaticService"
  serviceName: string = "ArithmaticService"
  prototypePath: string = "proto/arithmaticService.proto"

  async getSum(payload: CalculationRequest) {
    const { a, b } = payload
    return { action: `The sum of ${a} and ${b}`, result: +a + +b }
  }

  async getDiff(payload: CalculationRequest) {
    const { a, b } = payload
    let diff
    if (a > b) {
      diff = a - b
    } else {
      diff = b - a
    }
    return { action: `The difference of ${a} and ${b}`, result: diff }
  }

  async multiply(payload: CalculationRequest) {
    const { a, b } = payload
    return { action: `The multiplication of ${a} and ${b}`, result: a * b }
  }

  async divide(payload: CalculationRequest) {
    const { a, b } = payload
    let div
    if (a > b) {
      div = a / b
    } else {
      div = b / a
    }
    return { action: `The division of ${a} and ${b}`, result: div }
  }
}
