import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.4.x',
  jsiiVersion: '5.4.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-waf-ip-rate-limit-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-waf-ip-rate-limit-rule-group.git',
  description: 'This is an AWS CDK Construct for Rate Limit Rule on WAF V2.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  majorVersion: 1,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'stable',
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 1']), // every monday (JST/THU:02:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-waf-ip-rate-limit-rule-group',
    module: 'gammarers.aws_waf_ip_rate_limit_rule_group',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.WafIpRateLimitRuleGroup',
  },
});
project.synth();