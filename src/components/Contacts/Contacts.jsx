import { useDispatch, useSelector } from 'react-redux';
import { contactsSlice, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filerSlice';
import { List, DelBtn, ContactList } from './Contacts.styled';

const ListOfContacts = () => {
  const { removeContact } = contactsSlice.actions;
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const contactDeleter = id => {
    dispatch(removeContact(id));
  };

  const listToRender = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <div>
      <ContactList>
        {listToRender.map(({ id, name, number }) => {
          return (
            <List key={id}>
              <span>
                {name}: {number}
              </span>
              <DelBtn type="button" onClick={() => contactDeleter(id)}>
                Delete
              </DelBtn>
            </List>
          );
        })}
      </ContactList>
    </div>
  );
};

export default ListOfContacts;
