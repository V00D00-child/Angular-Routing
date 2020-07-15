import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';

const ROUTES = [
    {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup',
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class MessageRoutingModule {}
