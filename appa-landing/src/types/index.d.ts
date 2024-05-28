export {};

declare global {
  interface Window {
    handleIFrameMessage: any;
    isPermitted: any;
    attachEvent: any;
  }
}