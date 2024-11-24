

export const setTokenUser = (id: any): void => {
  localStorage.setItem('id', id);
};

export const getTokenUser = ():any => {
 return localStorage.getItem('id')
}

export const deleteTokenUser = (): void => {
  localStorage.removeItem('id');
};
