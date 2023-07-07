export const selectContactsState = state => {
  const normalized = state.filter.toLowerCase().trim();

  return state.contacts.items.filter(item =>
    item.name.toLowerCase().trim().includes(normalized)
  );
};

export const selectFilteredContacts = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
