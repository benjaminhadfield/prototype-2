import {store} from '../../store';

export const isLoggedIn = () => !!store.getState().data.user.role;
export const isAdminUserOrAbove = () => store.getState().data.user.role === 'admin' || store.getState().data.user.role === 'executive';
