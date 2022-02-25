import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

const PROTO_PATH = __dirname + "/../proto/nameService.proto"

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})

const HOST = "localhost"
const PORT = 50051
const nameServiceProto: any =
  grpc.loadPackageDefinition(packageDefinition).nameService

const client = new nameServiceProto.NameService(
  HOST + ":" + PORT,
  grpc.credentials.createInsecure()
)

client.getFormattedString(
  { firstName: "Arka", middleName: "Dev", lastName: "Banerjee" },
  function (err: any, response: { formattedString: string }) {
    if (err) {
      console.log(err.message)
      return
    }
    console.log("Got Response:", response.formattedString)
  }
)

client.getFullName(
  { firstName: "Arka", middleName: "Dev", lastName: "Banerjee" },
  function (err: any, response: { fullName: string }) {
    if (err) {
      console.log(err.message)
      return
    }
    console.log("Got Response:", response.fullName)
  }
)
