import { GRPCNameClientService } from "./grpc"

async function main() {
  const client = new GRPCNameClientService().getClient()

  const fullNameResult = await client.getFullName({
    firstName: "Hello",
    lastName: "Hello",
  })
  console.log(fullNameResult)
}

main().catch((e) => console.log(e))
