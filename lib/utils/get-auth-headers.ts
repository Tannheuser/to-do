import { Env } from '@/lib/env';

export const getAuthHeaders = () => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(Env.username + ':' + Env.password));

  return headers;
}

