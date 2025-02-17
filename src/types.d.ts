import net from 'net'

declare module 'minecraft-protocol' {
  interface Server {
    socketServer: net.Server
  }

  interface Client {
    id: number
    end(reason: string, fullReason: string): void
  }
}

declare module 'minecraft-data' {
  interface IndexedData {
    loginPacket: LoginPacket
  }
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

type Await<T> = T extends Promise<infer U> ? U : T
