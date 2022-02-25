import { GRPCNameClientService } from "./grpc"

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
}

main().catch((e) => console.log(e))
