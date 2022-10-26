import Postcard from "./postcard";
import TextComponent from "./text";
import './App.css';

function App() {
  return (
    <div className="App">
      <Postcard url='https://img.freepik.com/premium-vector/postcard-template-paper-blank-postal-card-backside-with-stamp-striped-frame-empty-vintage-mail-white-letter-message-vector-mockup-lines-text-message-mail-correspondence_102902-4584.jpg?w=2000'><TextComponent text='This is the first postcard' /></Postcard>
      <Postcard url='https://www.action-mailing.com/wp-content/uploads/2020/05/designing-a-postcard-1200x900.jpg'><TextComponent text='This is the second postcard' /></Postcard>
      <Postcard url='https://thepostcardstore.co.uk/wp-content/uploads/2020/06/Plain-Postcards-Back-416x314.jpg' ><TextComponent text='This is the third postcard, and this time, I am going to write a very long text' /></Postcard>
    </div>
  );
}

export default App;
