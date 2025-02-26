import { Production } from '../model/production';

export class RepoProductions {
  url = 'http://matter.local//wp-json/wp/v2/produccion';

  async getProductions(): Promise<Production[]> {
    const customUrl = `${this.url}?per_page=100`;
    const response = await fetch(customUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const productions = await response.json();

    return productions;
  }
}
