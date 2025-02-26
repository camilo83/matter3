import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Aliances from '../../components/aliances/aliances/aliances';
import { Artists } from '../../components/artists/artists/artists';
import Animation from '../../components/home/animation/animation';
import { BasicLayout } from '../../components/layout/basicLayout';
import { Separator } from '../../components/shared/separator/separator';
import { useArtists } from '../../hooks/useArtists';
import './artistsAndAliancesPage.scss';
import { Artist } from '../../model/artist';

export default function ArtistsAndAliancesPage() {
  const { loadArtists, artists } = useArtists();
  const { language } = useSelector((state: RootState) => state.languageState);
  const [artistsList, setArtistsList] = useState<Artist[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (artists.length === 0) {
          const newEvents = await loadArtists();
          const sortedArtists = [...newEvents].sort(
            (a, b) => a.acf.order - b.acf.order
          );
          setArtistsList(sortedArtists);
        } else {
          setArtistsList(artists);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="animation_container">
        <Animation></Animation>
      </div>
      <BasicLayout>
        <div className="artists-page-container">
          <div className="artists_aliances_page">
            <Separator height={200}></Separator>
            <p className="intro">
              {language === 'english' ? 'The project ' : 'El proyecto '}
              <span className="strong">Matter 3 Colombia</span>{' '}
              {language === 'english'
                ? 'brings together a diverse group of artists, researchers, and creators who explore the intersection of art, technology, and cultural heritage. Among them are international artists with distinguished careers, national creators engaging with tradition and digital innovation, and a team of researchers who have developed digital exhibition models, curatorial strategies, and cultural mediation processes.'
                : 'reúne a un grupo diverso de artistas, investigadores y creadores que exploran la intersección entre arte, tecnología y patrimonio cultural. Entre ellos se encuentran artistas internacionales con trayectorias destacadas, creadores nacionales que dialogan con la tradición y la innovación digital, y un equipo de investigadores que han desarrollado modelos expositivos digitales, estrategias curatoriales y procesos de mediación cultural.'}
            </p>
            <p className="intro">
              {language === 'english'
                ? 'Their collective work shapes a space for experimentation where art and technology come together to reimagine the exhibition of cultural heritage in the digital age.'
                : 'Su trabajo en conjunto da forma a un espacio de experimentación donde el arte y la tecnología se encuentran para reimaginar la exhibición del patrimonio cultural en la era digital.'}
            </p>
            <Separator height={100}></Separator>
            <Artists artists={artistsList}></Artists>
            <Separator height={300}></Separator>

            <Aliances></Aliances>

            <Separator height={200}></Separator>
          </div>
        </div>
      </BasicLayout>
    </>
  );
}
