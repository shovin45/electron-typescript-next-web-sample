// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IpcRenderer } from 'electron'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer
    }
  }

  interface Window {
    ipcRenderer: {
      invoke: (...args: any) => void
      on: (...args: any) => void
      once: (...args: any) => void
      postMessage: (...args: any) => void
      removeAllListeners: (...args: any) => void
      removeListener: (...args: any) => void
      send: (...args: any) => void
      sendSync: (...args: any) => void
      sendTo: (...args: any) => void
      sendToHost: (...args: any) => void
      addListener: (...args: any) => void
    }
  }
}

export type User = {
  id: number
  name: string
}
