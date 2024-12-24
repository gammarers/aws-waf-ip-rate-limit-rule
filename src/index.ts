import * as wafv2 from 'aws-cdk-lib/aws-wafv2';

export interface RuleConfig {
  readonly priority: number;
  readonly ruleName?: string;
  readonly cloudWatchMetricsName?: string;
}

export interface WAFIPRateLimitRuleProps {
  readonly rateLimit: number;
}

export class WAFIPRateLimitRule {

  constructor(private props: WAFIPRateLimitRuleProps) {
  }

  blockRule(config: RuleConfig): wafv2.CfnWebACL.RuleProperty {
    return {
      name: config.ruleName || 'block-rate-limit-rule',
      priority: config.priority,
      action: {
        block: {
          //  customResponse: {
          //    CustomResponseBodyKey: 'ip-restrict',
          //    ResponseCode: 403,
          //  },
        },
      },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: config.cloudWatchMetricsName || 'BlockRateLimitRuleMetric',
        sampledRequestsEnabled: true,
      },
      statement: {
        rateBasedStatement: {
          aggregateKeyType: 'IP',
          limit: this.props.rateLimit,
        },
      },
    };
  }
}

//export class WafIpRateLimitRuleGroup extends waf.CfnRuleGroup {
//  constructor(scope: Construct, id: string, props: WafIpRateLimitRuleGroupProps) {
//    super(scope, id, {
//      name: props?.name,
//      description: 'rate limit rule group',
//      scope: ((): string => {
//        switch (props.scope) {
//          case Scope.GLOBAL:
//            return 'CLOUDFRONT';
//          case Scope.REGIONAL:
//            return 'REGIONAL';
//        }
//      })(),
//      capacity: 10,
//      customResponseBodies: {
//        ['ip-restrict']: {
//          contentType: 'TEXT_PLAIN',
//          content: 'Sorry, You Are Not Allowed to Access This Service.',
//        },
//      },
//      rules: [
//        {
//          priority: 10,
//          name: 'rate-limit-rule',
//          action: {
//            block: {
//              CustomResponse: {
//                CustomResponseBodyKey: 'ip-restrict',
//                ResponseCode: 403,
//              },
//            },
//          },
//          visibilityConfig: {
//            cloudWatchMetricsEnabled: true,
//            sampledRequestsEnabled: true,
//            metricName: 'WafRateLimitRule',
//          },
//          statement: {
//            rateBasedStatement: {
//              aggregateKeyType: 'IP',
//              limit: props?.rateLimitCount ?? 1000,
//            },
//          },
//        },
//      ],
//      visibilityConfig: {
//        cloudWatchMetricsEnabled: true,
//        sampledRequestsEnabled: true,
//        metricName: 'RateLimitRule',
//      },
//      tags: [],
//    });
//  }
//}