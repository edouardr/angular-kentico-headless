import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';
import { environment } from '../../environments/environment';
import { HeroUnit } from '../models/hero-unit.class';
import { Home } from '../models/home.class';
import { Article } from '../models/article.class';
import { FactAboutUs } from '../models/fact-about-us.class';
import { ContentTypes } from '../content-types.class'

export function DeliveryClientFactory() {

  let projectId = environment.kenticoCloud.projectid;

  let typeResolvers: TypeResolver[] = [
    new TypeResolver(ContentTypes.HeroUnit.codeName, () => new HeroUnit()),
    new TypeResolver(ContentTypes.Home.codeName, () => new Home()),
    new TypeResolver(ContentTypes.Artcile.codeName, () => new Article()),
    new TypeResolver(ContentTypes.FactAboutUs.codeName, () => new FactAboutUs())
  ];

  return new DeliveryClient(
    new DeliveryClientConfig(projectId, typeResolvers)
  )
};

export var DeliveryClientProvider =
  {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
  };
