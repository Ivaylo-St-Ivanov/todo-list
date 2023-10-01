import './App.css';

import { Container, Form, InputField, Button, Line } from './styled';

function App() {
    return (
        <Container>
            <Form>
                <InputField placeholder=" ....." />
                <Button type="submit" name="btn" value="Add new task" />
            </Form>

            <Line />
        </Container>
    );
}

export default App;
