export interface InputMessageProps extends Partial<HTMLInputElement> {
  onSendMessage: (message: string) => void;
}