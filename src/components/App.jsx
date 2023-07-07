import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'service/thunks';
import { selectIsLoading, selectError } from 'redux/selectors';
// import { useFetchContactsQuery } from 'service/Api';
import { Spinner } from './Spinner/Spinner';


import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsList } from './ContactsList/ContactsList';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(`Oops! Something went wrong ${error}. Please try again in a few minutes.`);
    }
  }, [error])
  

  return (
    <>
      <Layout title="Phonebook">
        <ContactForm />
      </Layout>
      <Layout title="Contacts">
        <ContactFilter />
        <ContactsList />
        {isLoading && <Spinner />}
      </Layout>
    </>
  );
};
