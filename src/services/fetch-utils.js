import { client, checkError } from './client';

export async function getPokemon(from = 0, to = 101) {
  const response = await client
    .from ('pokemon-list')
    .select()
    .range(from, to);

  return checkError(response);
}