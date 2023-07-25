import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as waf from 'aws-cdk-lib/aws-wafv2';
import { WafRateLimitRuleGroup } from '../src';

describe('Web Acl rule specific group testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const ruleGroup = new WafRateLimitRuleGroup(stack, 'WafRateLimitRuleGroup', {
    rateLimitCount: 30000,
  });

  it('Is Waf RuleGroup', () => {
    expect(ruleGroup).toBeInstanceOf(waf.CfnRuleGroup);
  });

  it('Should match snapshot', () => {
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
  });
});