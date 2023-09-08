import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-ip-rate-limit-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-ip-rate-limit-rule-group.git',
  description: 'This is an AWS CDK Construct for Rate Limit Rule on WAF V2.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'experimental', // stable
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();