import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '5.5.x',
  jsiiVersion: '5.5.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-waf-ip-rate-limit-rule',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-waf-ip-rate-limit-rule.git',
  description: 'This is an AWS CDK Rate Limit Rule on WAF V2.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  majorVersion: 2,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'stable',
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.4.x',
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
    distName: 'gammarers.aws-waf-ip-rate-limit-rule',
    module: 'gammarers.aws_waf_ip_rate_limit_rule',
  },
});
project.synth();