import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';
import { environment } from '../../environments/environment';
import { HeroUnit } from '../models/hero-unit.class';
import { ContentTypes } from '../content-types.class'

export function DeliveryClientFactory() {

  let projectId = environment.kenticoCloud.projectid;

  let typeResolvers: TypeResolver[] = [
    new TypeResolver(ContentTypes.HeroUnit.codeName, () => new HeroUnit())
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
