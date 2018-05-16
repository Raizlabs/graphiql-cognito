import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

import { withAuthenticator } from 'aws-amplify-react';

import { GraphiQL } from './GraphiQL';

export const WrappedGraphiQL = withAuthenticator(GraphiQL);
