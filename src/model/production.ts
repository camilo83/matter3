export type Production = {
  id: string;
  slug: string;
  acf: {
    production_type:
      | 'PRODUCCIÓN ACADÉMICA'
      | 'PRODUCCIÓN AAD TECNOLÓGICA'
      | 'APROPIACIÓN SOCIAL';
    production_name: string;
    production_image: string;
    production_file: string;
  };
};
