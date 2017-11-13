import "reflect-metadata";

const codeNameMetadataKey = Symbol("codeName");

export const getPropertyForField = (target: any, fieldName: string) => {
  return Reflect.getMetadata(`${codeNameMetadataKey.toString()}:${fieldName}`, target);
}

export function codeName(codeName: string, target: any) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(`${codeNameMetadataKey.toString()}:${codeName}`, propertyKey, target)
  }
}
