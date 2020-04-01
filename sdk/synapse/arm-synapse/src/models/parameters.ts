/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const baselineName: msRest.OperationURLParameter = {
  parameterPath: "baselineName",
  mapper: {
    required: true,
    serializedName: "baselineName",
    type: {
      name: "Enum",
      allowedValues: [
        "master",
        "default"
      ]
    }
  }
};
export const bigDataPoolName: msRest.OperationURLParameter = {
  parameterPath: "bigDataPoolName",
  mapper: {
    required: true,
    serializedName: "bigDataPoolName",
    type: {
      name: "String"
    }
  }
};
export const blobAuditingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "blobAuditingPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "blobAuditingPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const columnName: msRest.OperationURLParameter = {
  parameterPath: "columnName",
  mapper: {
    required: true,
    serializedName: "columnName",
    type: {
      name: "String"
    }
  }
};
export const connectionPolicyName: msRest.OperationURLParameter = {
  parameterPath: "connectionPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "connectionPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const dataWarehouseUserActivityName: msRest.OperationURLParameter = {
  parameterPath: "dataWarehouseUserActivityName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dataWarehouseUserActivityName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const force: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "force"
  ],
  mapper: {
    serializedName: "force",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const geoBackupPolicyName: msRest.OperationURLParameter = {
  parameterPath: "geoBackupPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "geoBackupPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const includeDisabledRecommendations: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeDisabledRecommendations"
  ],
  mapper: {
    serializedName: "includeDisabledRecommendations",
    type: {
      name: "Boolean"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const ruleId: msRest.OperationURLParameter = {
  parameterPath: "ruleId",
  mapper: {
    required: true,
    serializedName: "ruleId",
    type: {
      name: "String"
    }
  }
};
export const ruleName: msRest.OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    required: true,
    serializedName: "ruleName",
    type: {
      name: "String"
    }
  }
};
export const scanId: msRest.OperationURLParameter = {
  parameterPath: "scanId",
  mapper: {
    required: true,
    serializedName: "scanId",
    type: {
      name: "String"
    }
  }
};
export const schemaName: msRest.OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    required: true,
    serializedName: "schemaName",
    type: {
      name: "String"
    }
  }
};
export const securityAlertPolicyName: msRest.OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "securityAlertPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const sensitivityLabelSource0: msRest.OperationURLParameter = {
  parameterPath: "sensitivityLabelSource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "sensitivityLabelSource",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const sensitivityLabelSource1: msRest.OperationURLParameter = {
  parameterPath: "sensitivityLabelSource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "sensitivityLabelSource",
    defaultValue: 'recommended',
    type: {
      name: "String"
    }
  }
};
export const skipToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skipToken"
  ],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String"
    }
  }
};
export const sqlPoolName: msRest.OperationURLParameter = {
  parameterPath: "sqlPoolName",
  mapper: {
    required: true,
    serializedName: "sqlPoolName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const tableName: msRest.OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    required: true,
    serializedName: "tableName",
    type: {
      name: "String"
    }
  }
};
export const transparentDataEncryptionName: msRest.OperationURLParameter = {
  parameterPath: "transparentDataEncryptionName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "transparentDataEncryptionName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const vulnerabilityAssessmentName: msRest.OperationURLParameter = {
  parameterPath: "vulnerabilityAssessmentName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "vulnerabilityAssessmentName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    type: {
      name: "String"
    }
  }
};
