import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export interface WafIpRateLimitRuleGroupProps {
  readonly name?: string;
  readonly scope: Scope;
  readonly rateLimitCount?: number;
}

export enum Scope {
  GLOBAL = 'Global',
  REGIONAL = 'Regional',
}

export class WafIpRateLimitRuleGroup extends waf.CfnRuleGroup {
  constructor(scope: Construct, id: string, props: WafIpRateLimitRuleGroupProps) {
    super(scope, id, {
      name: props?.name,
      description: 'rate limit rule group',
      scope: ((): string => {
        switch (props.scope) {
          case Scope.GLOBAL:
            return 'CLOUDFRONT';
          case Scope.REGIONAL:
            return 'REGIONAL';
        }
      })(),
      capacity: 10,
      customResponseBodies: {
        ['ip-restrict']: {
          contentType: 'TEXT_PLAIN',
          content: 'Sorry, You Are Not Allowed to Access This Service.',
        },
      },
      rules: [
        {
          priority: 10,
          name: 'rate-limit-rule',
          action: {
            block: {
              CustomResponse: {
                CustomResponseBodyKey: 'ip-restrict',
                ResponseCode: 403,
              },
            },
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            sampledRequestsEnabled: true,
            metricName: 'WafRateLimitRule',
          },
          statement: {
            rateBasedStatement: {
              aggregateKeyType: 'IP',
              limit: props?.rateLimitCount ?? 1000,
            },
          },
        },
      ],
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        sampledRequestsEnabled: true,
        metricName: 'RateLimitRule',
      },
      tags: [],
    });
  }
}