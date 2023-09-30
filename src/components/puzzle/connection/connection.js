import { supabase } from "./auth";

export const login = async () => {
  let { data, error } = await supabase.auth.signUp({
    email: "someone@email.com",
    password: "xOlxqvXldccTpBqjjluI",
  });

  console.log(error ? error : data);
};

