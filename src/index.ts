import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export interface WafRateLimitRuleGroupProps {
  readonly name?: string;
  readonly rateLimitCount?: number;
}

export class WafRateLimitRuleGroup extends waf.CfnRuleGroup {
  constructor(scope: Construct, id: string, props?: WafRateLimitRuleGroupProps) {
    super(scope, id, {
      name: props?.name,
      description: 'rate limit rule group',
      scope: 'CLOUDFRONT',
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