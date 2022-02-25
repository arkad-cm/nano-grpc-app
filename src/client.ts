import { GRPCNameClientService } from "./grpc"
import { GRPCArithmaticClientService } from "./grpc/services/GRPCArithmaticClientService"

async function main() {
  const client = new GRPCNameClientService().getClient()

  const fullNameResponse = await client.getFullName({
    firstName: "Hello",
    lastName: "World",
  })
  console.log(fullNameResponse)

  const formattedResponse = await client.getFormattedString({
    firstName: "Hello",
    lastName: "World",
  })
  console.log(formattedResponse)

  const aClient = new GRPCArithmaticClientService().getClient()

  const divide = await aClient.divide({ a: 2, b: 8 })
  console.log(divide)

  const add = await aClient.getSum({ a: 2, b: 8 })
  console.log(add)

  const substract = await aClient.getDiff({ a: 2, b: 8 })
  console.log(substract)

  const multiply = await aClient.multiply({ a: 2, b: 8 })
  console.log(multiply)
}

main().catch((e) => console.log(e))
