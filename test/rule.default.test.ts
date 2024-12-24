import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { WAFIPRateLimitRule } from '../src';

describe('Web Acl rule default group testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const ipRateLimitRule = new WAFIPRateLimitRule({
    rateLimit: 100,
  });

  new wafv2.CfnWebACL(stack, 'WebACL', {
    defaultAction: { allow: {} },
    scope: 'CLOUD_FRONT',
    name: 'WebAclWithCustomRules',
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      metricName: 'WebAclMetric',
      sampledRequestsEnabled: true,
    },
    rules: [
      ipRateLimitRule.blockRule({
        priority: 1,
      }),
    ],
  });

  const template = Template.fromStack(stack);

  it('Should have WAF WebACL Rule', async () => {
    template.hasResourceProperties('AWS::WAFv2::WebACL', {
      Rules: [
        {
          Action: {
            Block: {},
          },
          Name: 'block-rate-limit-rule',
          Priority: 1,
          Statement: {
            RateBasedStatement: {
              AggregateKeyType: 'IP',
              Limit: 100,
            },
          },
          VisibilityConfig: {
            CloudWatchMetricsEnabled: true,
            MetricName: 'BlockRateLimitRuleMetric',
            SampledRequestsEnabled: true,
          },
        },
      ],
    });
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});