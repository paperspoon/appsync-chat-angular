import { Injectable } from '@angular/core';

import AWSAppSyncClient from 'aws-appsync';
import appSyncConfig from './aws-export';
import { ApolloModule, Apollo } from 'apollo-angular';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class GraphqlService {

  constructor(private apollo: Apollo) {
  }

  hydrated() {
    const appsyncClient = new AWSAppSyncClient({
      url: appSyncConfig.graphqlEndpoint,
      region: appSyncConfig.region,
      auth: {
        type: appSyncConfig.authenticationType,
        apiKey: appSyncConfig.apiKey,
      }
    });
    this.apollo.setClient(appsyncClient);
    return appsyncClient.hydrated();
  }

}
