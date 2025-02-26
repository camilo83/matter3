import { Fade } from 'react-awesome-reveal';
import { BasicLayout } from '../../components/layout/basicLayout';
import './productionPage.scss';
import { CustomButton } from '../../components/shared/button/button';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Animation from '../../components/home/animation/animation';
import { Separator } from '../../components/shared/separator/separator';
import { useProductions } from '../../hooks/useProductions';
import { Production } from '../../model/production';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

gsap.registerPlugin(ScrollTrigger);

export default function ProductionPage() {
  const { language } = useSelector((state: RootState) => state.languageState);

  const academicProductionRef = useRef<HTMLDivElement>(null);
  const academicProductionTitleRef = useRef<HTMLHeadingElement>(null);
  const prodAndTecRef = useRef<HTMLDivElement>(null);
  const prodAndTecTitleRef = useRef<HTMLHeadingElement>(null);
  const socialApropiationRef = useRef<HTMLDivElement>(null);
  const socialApropiationTitleRef = useRef<HTMLHeadingElement>(null);

  const { loadProductions, productions } = useProductions();
  const [productionsList, setProductionsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (productions.length === 0) {
          const newartists = await loadProductions();
          setProductionsList(newartists);
        } else {
          setProductionsList(productions);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }),
    [];

  useEffect(() => {
    if (window.innerWidth > 650) {
      if (academicProductionRef.current) {
        ScrollTrigger.create({
          trigger: academicProductionRef.current,
          start: 'top top+=15%',
          end: 'bottom top+=30%',
          pin: academicProductionTitleRef.current,
          pinSpacing: false,

          onEnter: () =>
            gsap.set(academicProductionTitleRef.current, {
              clearProps: 'transform',
            }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }
  }, [loading]);

  useEffect(() => {
    if (window.innerWidth > 650) {
      if (prodAndTecRef.current) {
        ScrollTrigger.create({
          trigger: prodAndTecRef.current,
          start: 'top top+=15%',
          end: 'bottom top+=30%',
          pin: prodAndTecTitleRef.current,
          pinSpacing: false,

          onEnter: () =>
            gsap.set(prodAndTecTitleRef.current, {
              clearProps: 'transform',
            }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }
  }, [loading]);

  useEffect(() => {
    if (window.innerWidth > 650) {
      if (socialApropiationRef.current) {
        ScrollTrigger.create({
          trigger: socialApropiationRef.current,
          start: 'top top+=15%',
          end: 'bottom top+=30%',
          pin: socialApropiationTitleRef.current,
          pinSpacing: false,

          onEnter: () =>
            gsap.set(socialApropiationTitleRef.current, {
              clearProps: 'transform',
            }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }
  }, [loading]);

  const openDocument = (url: string) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="animation_container">
        <Animation></Animation>
      </div>
      <BasicLayout>
        <div className="page-container">
          <div className="production_page">
            <div className="title_container">
              <h2>{language === 'english' ? 'PRODUCTION' : 'PRODUCCIÓN'}</h2>
            </div>

            <div className="production_section" ref={academicProductionRef}>
              <h3 ref={academicProductionTitleRef} className="subtitle">
                {language === 'english'
                  ? 'ACADEMIC PRODUCTION'
                  : 'PRODUCCIÓN ACADÉMICA'}
              </h3>
              <ul>
                {productionsList
                  .filter(
                    (prod: Production) =>
                      prod.acf.production_type === 'PRODUCCIÓN ACADÉMICA'
                  )
                  .map((prod, index) => (
                    <Fade key={index} triggerOnce direction="up" delay={300}>
                      <li>
                        <img
                          src={prod.acf.production_image}
                          alt={prod.acf.production_name}
                        />
                        <div>
                          <h3>{prod.acf.production_name}</h3>
                          <div
                            className="button_container"
                            onClick={() =>
                              openDocument(prod.acf.production_file)
                            }
                          >
                            <CustomButton
                              title={
                                language === 'english'
                                  ? 'LEARN MORE'
                                  : 'CONOCE MÁS'
                              }
                              color="#1c1c1c"
                              backgroundColor="#ffffff"
                            ></CustomButton>
                          </div>
                        </div>
                      </li>
                    </Fade>
                  ))}
              </ul>
            </div>

            <div className="production_section" ref={prodAndTecRef}>
              <h3 ref={prodAndTecTitleRef} className="subtitle">
                {language === 'english'
                  ? 'TECHNOLOGICAL PRODUCTION'
                  : 'PRODUCCIÓN AAD TECNOLÓGICA'}
              </h3>
              <ul>
                {productionsList
                  .filter(
                    (prod) =>
                      prod.acf.production_type === 'PRODUCCIÓN AAD TECNOLÓGICA'
                  )
                  .map((prod, index) => (
                    <Fade key={index} triggerOnce direction="up" delay={300}>
                      <li>
                        <img
                          src={prod.acf.production_image}
                          alt={prod.acf.production_name}
                        />
                        <div>
                          <h3>{prod.acf.production_name}</h3>
                          <div
                            className="button_container"
                            onClick={() =>
                              openDocument(prod.acf.production_file)
                            }
                          >
                            <CustomButton
                              title={
                                language === 'english'
                                  ? 'LEARN MORE'
                                  : 'CONOCE MÁS'
                              }
                              color="#1c1c1c"
                              backgroundColor="#ffffff"
                            ></CustomButton>
                          </div>
                        </div>
                      </li>
                    </Fade>
                  ))}
              </ul>
            </div>

            <div className="production_section" ref={socialApropiationRef}>
              <h3 ref={socialApropiationTitleRef} className="subtitle">
                {language === 'english'
                  ? 'SOCIAL APPROPRIATION'
                  : 'APROPIACIÓN SOCIAL'}
              </h3>
              <ul>
                {productionsList
                  .filter(
                    (prod) => prod.acf.production_type === 'APROPIACIÓN SOCIAL'
                  )
                  .map((prod, index) => (
                    <Fade key={index} triggerOnce direction="up" delay={300}>
                      <li>
                        <img
                          src={prod.acf.production_image}
                          alt={prod.acf.production_name}
                        />
                        <div>
                          <h3>{prod.acf.production_name}</h3>
                          <div
                            className="button_container"
                            onClick={() =>
                              openDocument(prod.acf.production_file)
                            }
                          >
                            <CustomButton
                              title={
                                language === 'english'
                                  ? 'LEARN MORE'
                                  : 'CONOCE MÁS'
                              }
                              color="#1c1c1c"
                              backgroundColor="#ffffff"
                            ></CustomButton>
                          </div>
                        </div>
                      </li>
                    </Fade>
                  ))}
              </ul>
            </div>
          </div>
          <Separator height={300}></Separator>
        </div>
      </BasicLayout>
    </>
  );
}
