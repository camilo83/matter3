import { EventType } from '../model/event';

export class RepoEvents {
  url = 'http://matter.local//wp-json/wp/v2/eventos';

  async getEvents(): Promise<EventType[]> {
    const customUrl = `${this.url}?per_page=100`;
    const response = await fetch(customUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const events = await response.json();

    return events;
  }

  async getEvent(slug: string): Promise<EventType[]> {
    const response = await fetch(`${this.url}?slug=${slug}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const event = await response.json();
    return event;
  }
}
