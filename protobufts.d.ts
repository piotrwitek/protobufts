/// <reference path="./grpc.d.ts" />

export declare namespace Protobuf {
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
