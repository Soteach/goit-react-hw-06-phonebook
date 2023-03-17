import AddContactForm from './ContactForm';
import ListOfContacts from './Contacts';
import Filter from './Filter';
import { AppTitle, Wrapper, Header } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <AddContactForm />
      <Filter />
      <AppTitle>Contacts</AppTitle>
      <ListOfContacts />
    </Wrapper>
  );
};

export { App };
