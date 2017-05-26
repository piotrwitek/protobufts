/// <reference types="node" />
/// <reference path="./grpc.d.ts" />

declare namespace Protobufts {
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
