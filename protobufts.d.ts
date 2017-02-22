declare module 'grpc' {
  export = Grpc;
}

declare namespace Grpc {
  export type Credentials = {};
  export namespace credentials {
    export function createInsecure(): Credentials;
    export function createSsl(hostCertificate: Buffer): Credentials;
  }

  export class Metadata {
    add(key: string, value: string | Buffer): void;
  }

  export class Client {
    constructor(address: string, credentials: Grpc.Credentials, options?: Object);
  }

  export function load<grpcObjectDeclaration>(
    protoFilePath: string | Object, format?: 'proto' | 'json',
  ): grpcObjectDeclaration;
}

declare namespace Protobuf {
  export type Message = {}
  export type RpcCallback<T> = (err?: Error, resMessage?: T) => void;

  export class Service extends Grpc.Client { }

  export interface Rpc<Request, Response> {
    (reqMessage: Request, metadata: Grpc.Metadata, callback: RpcCallback<Response>):
      NodeJS.EventEmitter;
    (request: Request, callback: RpcCallback<Response>):
      NodeJS.EventEmitter;
  }
}
