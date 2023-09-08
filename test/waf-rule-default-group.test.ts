import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as waf from 'aws-cdk-lib/aws-wafv2';
import { WafIpRateLimitRuleGroup } from '../src';

describe('Web Acl rule default group testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const ruleGroup = new WafIpRateLimitRuleGroup(stack, 'WafIpRateLimitRuleGroup');

  it('Is Waf RuleGroup', () => {
    expect(ruleGroup).toBeInstanceOf(waf.CfnRuleGroup);
  });

  const template = Template.fromStack(stack);

  it('Should have WAF Rule Group', () => {
    template.hasResourceProperties('AWS::WAFv2::RuleGroup', Match.objectEquals({
      Description: 'rate limit rule group',
      Scope: 'CLOUDFRONT',
      Capacity: 10,
      CustomResponseBodies: {
        'ip-restrict': {
          Content: 'Sorry, You Are Not Allowed to Access This Service.',
          ContentType: 'TEXT_PLAIN',
        },
      },
      Rules: [
        {
          Priority: 10,
          Name: 'rate-limit-rule',
          Action: {
            Block: {
              CustomResponse: {
                CustomResponseBodyKey: 'ip-restrict',
                ResponseCode: 403,
              },
            },
          },
          VisibilityConfig: {
            CloudWatchMetricsEnabled: true,
            MetricName: 'WafRateLimitRule',
            SampledRequestsEnabled: true,
          },
          Statement: {
            RateBasedStatement: {
              AggregateKeyType: 'IP',
              Limit: 1000,
            },
          },
        },
      ],
      VisibilityConfig: {
        CloudWatchMetricsEnabled: true,
        MetricName: 'RateLimitRule',
        SampledRequestsEnabled: true,
      },
    }));
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});