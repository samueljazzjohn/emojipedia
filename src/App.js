import Card from "./components/Card"
import EmojiDetails from "./Emoji";

// function CreateCard(emojiTerm){
//   return <Card 
//     key={emojiTerm.id}
//     name={emojiTerm.name}
//     details={emojiTerm.details}
//     emoji={emojiTerm.emoji}
//   />
// }

function App() {
  return (
    <div className="App">
      <header>
        <h1 align="center">Emojipedia</h1>
      </header>
      <dl>
        {EmojiDetails.map(emojiTerm =>
          <Card
            key={emojiTerm.id}
            name={emojiTerm.name}
            details={emojiTerm.details}
            emoji={emojiTerm.emoji}
          />
        )}
      </dl>
    </div>
  );
}

export default App;
