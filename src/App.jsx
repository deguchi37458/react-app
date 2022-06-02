import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  }

  return (
    <>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">こんばんは！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};