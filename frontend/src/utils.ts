import {IFormValues, IPayload} from "./interfaces";

export function generatePayload(formValues: IFormValues):IPayload {
  const {exprType, ...rest} = formValues

   return {
    A: JSON.parse(rest.A),
    B: JSON.parse(rest.B),
    C: JSON.parse(rest.C),
    D: Number(rest.D),
    E: Number(rest.E),
    F: Number(rest.F)
  }
}

export async function fetchData<T>(URL: string, payload: IPayload): Promise<T> {
  let data
  const response = await fetch(URL, {
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
  })

  try {
    data = await response.json();
  } catch(e) {
    throw new Error(response.statusText);
  }

  return data
}

