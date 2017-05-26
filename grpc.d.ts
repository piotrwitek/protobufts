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
