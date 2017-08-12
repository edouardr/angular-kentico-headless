import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';
import { environment } from '../../environments/environment';
import { ContentTypes } from '../content-types.class'
import * as Models from '../models/_models'

export function DeliveryClientFactory() {

  let projectId = environment.kenticoCloud.projectid;

  let typeResolvers: TypeResolver[] = [
    new TypeResolver(ContentTypes.HeroUnit.codeName, () => new Models.HeroUnit()),
    new TypeResolver(ContentTypes.Home.codeName, () => new Models.Home()),
    new TypeResolver(ContentTypes.Article.codeName, () => new Models.Article()),
    new TypeResolver(ContentTypes.Cafe.codeName, () => new Models.Cafe()),
    new TypeResolver(ContentTypes.FactAboutUs.codeName, () => new Models.FactAboutUs())
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
