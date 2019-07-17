import { makeTypeSpecFromSwaggerType, TypeSpec } from "../typespec";
import { SwaggerString, SwaggerType } from "../swagger/Swagger";

export interface StringTypeSpec extends TypeSpec {
  readonly tsType: "string";
  readonly isAtomic: true;
  readonly format?: string;
}

export function makeStringTypeSpec(swaggerType: SwaggerString): StringTypeSpec {
  return {
    ...makeTypeSpecFromSwaggerType(swaggerType),
    tsType: "string",
    isAtomic: true,
    format: swaggerType.format
  };
}

export function isString(
  swaggerType: SwaggerType
): swaggerType is SwaggerString {
  return swaggerType.type === "string";
}
