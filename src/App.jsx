import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
           height="100vh"
           projectID="a2d82bde-5ec8-411e-a4ed-2b6b510228e7"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}  /> }
         />
    );
}

export default App;