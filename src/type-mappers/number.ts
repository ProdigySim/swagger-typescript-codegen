import { TypeSpec, makeTypeSpecFromSwaggerType } from "../typespec";
import { SwaggerNumber, SwaggerType } from "../swagger/Swagger";

export interface NumberTypeSpec extends TypeSpec {
  readonly tsType: "number";
  readonly isAtomic: true;
  readonly format?: string;
}

export function makeNumberTypeSpec(swaggerType: SwaggerNumber): NumberTypeSpec {
  return {
    ...makeTypeSpecFromSwaggerType(swaggerType),
    tsType: "number",
    isAtomic: true,
    format: swaggerType.format
  };
}

export function isNumber(
  swaggerType: SwaggerType
): swaggerType is SwaggerNumber {
  return swaggerType.type === "number" || swaggerType.type === "integer";
}
