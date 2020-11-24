#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MooDemoProjectStack } from '../lib/moo-demo-project-stack';

const app = new cdk.App();
new MooDemoProjectStack(app, 'MooDemoProjectStack', {

    // add aws region to app
    env: {
        region: 'us-east-1',
    },

});
