import { useRecoilState } from 'recoil';
import textState from '@recoil/atoms';
import './App.css';

const App = () => {
  const [text, setText] = useRecoilState(textState);

  const handleClick = () => {
    setText(text + 1);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        click here!
      </button>
      <p>{text}</p>
    </div>
  );
};

export default App;
