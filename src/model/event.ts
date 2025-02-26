import { SocialMediaPost } from './socialMediaPost';
import { Work } from './work';

export type EventType = {
  id: number;
  slug: string;
  acf: {
    order: number;
    name: string;
    name_eng: string;
    description: string;
    description_eng: string;
    long_description: string;
    long_description_eng: string;
    inauguration: string;
    duration: string;
    location: string;
    event_year: string;
    main_image: string;
    imagen_1: string;
    imagen_2: string;
    imagen_3: string;
    works: [Work];
    social_media_posts: [SocialMediaPost];
  };
};
