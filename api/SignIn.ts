import { api } from ".";

export async function SignIn(email: string, password: string) {
  api
    .post(`/login?email=${email}&password=${password}`)
    .then((res) => {
      console.log("response -- ", res.data.data);
    })
    .catch((err) => {
      console.log("error --- ",err?.response);
    });
}
