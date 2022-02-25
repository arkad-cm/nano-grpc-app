import { GRPCServer, GRPCNameService } from "./grpc"
import { GRPCArithmaticService } from "./grpc/services/GRPCArithmaticService"

const server = new GRPCServer()
server.addService(new GRPCNameService())
server.addService(new GRPCArithmaticService())
server.listen()
