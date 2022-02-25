import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"

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

function getFormattedString(
  payload: {
    request: { firstName: string; middleName: string; lastName: string }
  },
  callback: (error: any, response: { formattedString: string }) => void
) {
  const { firstName, middleName, lastName } = payload.request
  callback(null, {
    formattedString:
      "Your Formatted String is: " +
      `${firstName} ${middleName ? middleName + " " : ""}${lastName}`,
  })
}

function getFullName(
  payload: {
    request: { firstName: string; middleName: string; lastName: string }
  },
  callback: (error: any, response: { fullName: string }) => void
) {
  const { firstName, middleName, lastName } = payload.request
  callback(null, {
    fullName: `${firstName} ${middleName ? middleName + " " : ""}${lastName}`,
  })
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server()
  server.addService(nameServiceProto.NameService.service, {
    getFormattedString,
    getFullName,
  })
  server.bindAsync(
    HOST + ":" + PORT,
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start()
    }
  )
  console.log("Server listening on PORT", PORT)
}

main()
