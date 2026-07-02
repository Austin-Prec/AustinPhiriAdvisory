import { supabase } from './supabase';
import type { Session } from '@supabase/supabase-js';

export const signIn = async (
  email: string,
  password: string
): Promise<{ error: string | null }> => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error ? error.message : null };
};

export const signOut = async (): Promise<void> => {
  await supabase.auth.signOut();
};

export const getSession = async (): Promise<Session | null> => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};

export const onAuthStateChange = (
  callback: (session: Session | null) => void
) => {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });
  return data.subscription;
};
