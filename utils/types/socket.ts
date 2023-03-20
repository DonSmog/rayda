export enum SocketAction {
  INIT = "init",
  SEND_MESSAGE = "sendMessage",
  UPDATE_WATCH_HISTORY = "updateWatchHistory",
  SAVE_WATCH_HISTORY = "saveWatchHistory",
}

export enum SocketEvent {
  INITIALIZED = "initialized",
  NEW_MESSAGE = "newMessage",
  SAVED_WATCH_HISTORY = "savedWatchHistory",
}

export interface EmitData<T = unknown> {
  action: SocketAction;
  data?: T | null;
}

export interface EventData<T = unknown> {
  event: SocketEvent;
  data: T;
}
