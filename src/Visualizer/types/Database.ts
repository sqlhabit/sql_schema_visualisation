import { EdgeConfig } from "./EdgeConfig";
import { SchemaColors } from "./SchemaColors";
import { TableConfig } from "./TableConfig";
import { TablePositions } from "./TablePositions";

export interface DatabaseConfig {
  tables: TableConfig[],
  edgeConfigs: EdgeConfig[],
  schemaColors: SchemaColors,
  tablePositions: TablePositions
};

export interface DatabaseConfigs {
  [databaseName: string] : DatabaseConfig
};
