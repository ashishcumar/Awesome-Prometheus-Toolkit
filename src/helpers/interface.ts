export interface IAlertRule {
  alert: string;
  expr: string;
  for: string;
  labels: {
    severity: string;
  };
  annotations: {
    summary: string;
    description: string;
  };
}

export interface IAlertObject {
  title: string;
  fetchUrl: string;
  icon: any;
  rulesCount: string;
  description?: string | undefined;
}

export interface EmbeddedExporter {
  name: string;
  rules: IAlertRule[];
}

export interface Configuration {
  groups: EmbeddedExporter[];
}
