import { Artist } from '../model/artist';

export class RepoArtists {
  url = 'http://matter.local//wp-json/wp/v2/artistas';

  async getArtists(): Promise<Artist[]> {
    const customUrl = `${this.url}?per_page=100`;
    const response = await fetch(customUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const artists = await response.json();

    return artists;
  }

  async getArtist(id: number): Promise<Artist> {
    const response = await fetch(`${this.url}/${id}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const artist = await response.json();

    return artist;
  }
}
