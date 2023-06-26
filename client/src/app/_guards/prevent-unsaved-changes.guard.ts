import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = 
  (component):boolean => {
   if(component.editForm?.dirty){
    return confirm("Any unsaved changes will be lost.");
   }
    return true;
};
// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { MemberEditComponent } from '../members/member-edit/member-edit.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class preventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
//   canDeactivate(component: MemberEditComponent): boolean {
//     if (component.editForm?.dirty) {
//       return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
//     }
//     return true;
//   }
  
// }