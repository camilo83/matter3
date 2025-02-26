import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Separator } from '../../shared/separator/separator';
import './mdeVideo.scss';

export function MdeVideo() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <>
      <div className="mde_video">
        <div>
          <h3>
            {language === 'english'
              ? 'Introduction to the Colombian Digital Exhibition Model'
              : 'Introducción al Modelo Digital de Exposición Colombiano'}
          </h3>
          <div className="mde_video_info_container">
            <p>
              {language === 'english' ? 'The ' : 'El '}
              <span className="strong">
                {language === 'english'
                  ? 'MDE developed at Matter 3 Colombia'
                  : 'MDE desarrollado en Matter 3 Colombia'}
              </span>{' '}
              {language === 'english'
                ? 'addresses a specific need: to digitize and exhibit the collection of type specimens from the '
                : 'parte de una necesidad específica: digitalizar y exhibir la colección de especímenes tipo del '}
              <span className="strong">
                {language === 'english'
                  ? 'La Salle Museum of Natural Sciences.'
                  : 'Museo de Ciencias Naturales de La Salle.'}
              </span>
              {language === 'english'
                ? ' Its approach integrates technologies such as:'
                : ' Su enfoque integra tecnologías como:'}
            </p>
            <ul>
              <li>
                <p>
                  <span className="strong">
                    {language === 'english'
                      ? '• Photogrammetry and 3D scanning'
                      : '• Fotogrametría y escaneo 3D'}
                  </span>
                  {language === 'english'
                    ? ', to generate precise models of the specimens.'
                    : ', para generar modelos precisos de los especímenes.'}
                </p>
              </li>
              <li>
                <p>
                  <span className="strong">
                    {language === 'english'
                      ? '• Augmented reality and artificial intelligence'
                      : '• Realidad aumentada e inteligencia artificial'}
                  </span>{' '}
                  {language === 'english'
                    ? ', to enhance interaction with objects.'
                    : ', para mejorar la interacción con los objetos.'}
                </p>
              </li>
              <li>
                <p>
                  <span className="strong">
                    {language === 'english'
                      ? '• Digital curation'
                      : '• Curaduría digital'}
                  </span>
                  {language === 'english'
                    ? ', which allows exploring the collection through hybrid narratives between science and art.'
                    : ', que permite explorar la colección desde narrativas híbridas entre ciencia y arte.'}
                </p>
              </li>
            </ul>
            <p>
              {language === 'english'
                ? 'More than just a digital twin of the physical museum, this MDE reimagines how scientific collections can be presented and studied in digital environments, providing access to global communities and fostering new pedagogical practices.'
                : 'Más que un gemelo digital del museo físico, este MDE reimagina la forma en que las colecciones científicas pueden ser presentadas y estudiadas en entornos digitales, brindando acceso a comunidades globales y fomentando nuevas prácticas pedagógicas.'}
            </p>
          </div>
        </div>
        <Separator height={100}></Separator>
        <div>
          <h3>
            {language === 'english'
              ? 'Creation Stages of the Colombian Digital Model'
              : 'Etapas de Creación del Modelo Digital Colombiano'}
          </h3>
          <div className="mde_video_info_container">
            <p>
              {language === 'english'
                ? 'The development of this MDE has followed a methodological process in '
                : 'El desarrollo de este MDE ha seguido un proceso metodológico en '}
              <span className="strong">
                {language === 'english'
                  ? 'three main phases:'
                  : 'tres fases principales:'}
              </span>
            </p>
            <ol>
              <li className="order-list-item">
                <h4>
                  {language === 'english'
                    ? 'Research and data collection'
                    : 'Investigación y recopilación de datos'}
                </h4>
                <ul>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Digitization of specimens using 3D scanning and photogrammetry.'
                        : '• Digitalización de especímenes mediante escaneo 3D y fotogrametría.'}
                    </p>
                  </li>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Integration of scientific databases and digital content curation.'
                        : '• Integración de bases de datos científicas y curaduría de contenido digital.'}
                    </p>
                  </li>
                </ul>
              </li>
              <li className="order-list-item">
                <h4>
                  {language === 'english'
                    ? 'Design and conceptualization'
                    : 'Diseño y conceptualización'}
                </h4>
                <ul>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Creation of the digital exhibition environment with an interactive approach.'
                        : '• Creación del entorno expositivo digital con un enfoque interactivo.'}
                    </p>
                  </li>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Definition of visual and digital mediation narratives.'
                        : '• Definición de narrativas visuales y de mediación digital.'}
                    </p>
                  </li>
                </ul>
              </li>
              <li className="order-list-item">
                <h4>
                  {language === 'english'
                    ? 'Technological development and user experience'
                    : 'Desarrollo tecnológico y experiencia de usuario'}
                </h4>
                <ul>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Implementation of augmented reality tools.'
                        : '• Implementación de herramientas de realidad aumentada.'}
                    </p>
                  </li>
                  <li>
                    <p>
                      {language === 'english'
                        ? '• Optimization of the MDE for access through various digital platforms.'
                        : '• Optimización del MDE para su acceso a través de diversas plataformas digitales.'}
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              {language === 'english'
                ? 'This digital model aligns with global initiatives for the preservation and exhibition of heritage in the digital age. By integrating with the exhibitions '
                : 'Este modelo digital se inscribe en iniciativas globales de preservación y exhibición del patrimonio en la era digital. Al integrarse con las exposiciones '}
              <span className="italic">Les Immatériaux</span> e{' '}
              <span className="italic">Iconoclash,</span>{' '}
              {language === 'english'
                ? 'it expands the scope of the '
                : 'amplía el alcance del proyecto '}
              <span className="strong">Beyond Matter</span>,{' '}
              {language === 'english'
                ? 'adding a Latin American perspective to the conversation about the future of museography and cultural exhibition.'
                : 'sumando una perspectiva latinoamericana a la conversación sobre el futuro de la museografía y la exhibición cultural.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
