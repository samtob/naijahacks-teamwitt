import { NgModule } from '@angular/core';
import { FrontSettingComponent } from './front-setting/front-setting';
import { SettingComponent } from './setting/setting';
@NgModule({
	declarations: [FrontSettingComponent,
    SettingComponent],
	imports: [],
	exports: [FrontSettingComponent,
    SettingComponent]
})
export class ComponentsModule {}
