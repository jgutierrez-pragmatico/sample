
import {
    RadarRing,
    RadarQuadrant,
    RadarEntry,
    TechRadarLoaderResponse,
    TechRadarApi,
  } from './api';
  
  const rings = new Array<RadarRing>();
  rings.push({ id: 'adopt', name: 'Explorando', color: '#5BA300' });
  rings.push({ id: 'trial', name: 'Experimentando', color: '#009EB0' });
  rings.push({ id: 'assess', name: 'Escalando', color: '#C7BA00' });
  rings.push({ id: 'hold', name: 'Explotando', color: '#E09B96' });
  
  const quadrants = new Array<RadarQuadrant>();
  quadrants.push({ id: 'backEnd', name: 'Backend' });
  quadrants.push({ id: 'frontEnd', name: 'FrontEnd' });
  quadrants.push({ id: 'architecture', name: 'Arquitectura' });
  quadrants.push({ id: 'qa', name: 'Calidad de Software' });
  quadrants.push({ id: 'devops', name: 'DevSecOps' });
  quadrants.push({ id: 'integration', name: 'Integración' });
  quadrants.push({ id: 'cloud', name: 'Cloud Ops' });
  quadrants.push({ id: 'mobile', name: 'Movil' });
  
  const entries = new Array<RadarEntry>();
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'adopt',
        date: new Date('2020-08-06'),
        description:
          'Programming Languages',
      },
    ],
    key: 'c#',
    id: '#',
    title: 'C#',
    quadrant: 'backEnd',
    links: [
      {
        url: 'https://learn.microsoft.com/es-es/dotnet/csharp/',
        title: 'Learn more',
      },
    ],
    description:
      'Aprenda a escribir aplicaciones con el lenguaje de programación C# en la plataforma .NET.',
  });
  
  export const mock: TechRadarLoaderResponse = {
    entries,
    quadrants,
    rings,
  };
  
  export class SampleTechRadarApi implements TechRadarApi {
    async load() {
      return mock;
    }
  }
  