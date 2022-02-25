import { GRPCServer, GRPCNameService } from "./grpc"

const server = new GRPCServer()
server.addService(new GRPCNameService())
server.listen()
