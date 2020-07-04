import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
