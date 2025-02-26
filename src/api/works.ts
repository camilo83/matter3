import { WorkType } from '../model/work';

export class RepoWorks {
  url = 'http://matter.local//wp-json/wp/v2/obra';

  async getWorks(): Promise<WorkType[]> {
    const customUrl = `${this.url}?per_page=100`;
    const response = await fetch(customUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const works = await response.json();

    return works;
  }

  async getWork(slug: string): Promise<WorkType[]> {
    const response = await fetch(`${this.url}?slug=${slug}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const work = await response.json();
    return work;
  }
}
