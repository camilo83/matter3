export type Work = {
  is_outstanding: boolean;
  id: number;
  work_main_image: string;
  work_title: string;
  work_title_eng: string;
  work_description: string;
  work_description_eng: string;
  type: string;
  work_image_1: WorkImage;
  work_image_2: WorkImage;
  work_image_3: WorkImage;
  work_image_4: WorkImage;
  work_image_5: WorkImage;
  work_image_6: WorkImage;
  work_image_7: WorkImage;
  work_image_8: WorkImage;
  work_image_9: WorkImage;
  work_image_10: WorkImage;
  related_artists: [string];
};

type WorkImage = {
  url: string;
};

export type WorkType = {
  id: number;
  slug: string;
  acf: Work;
};
