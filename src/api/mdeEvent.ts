import { MdeEvent } from '../model/mdeEvent';

export class RepoMdeEvents {
  url = 'http://matter.local//wp-json/wp/v2/mde';

  async getMdeEvents(): Promise<MdeEvent[]> {
    const customUrl = `${this.url}?per_page=100`;
    const response = await fetch(customUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const mdeEvents = await response.json();

    return mdeEvents;
  }
}
