import { Component, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { take } from 'rxjs';
import { Member } from 'src/app/_model/member';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent {
  @Input() member: Member|undefined;
  uploader:FileUploader|undefined;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  user: User | undefined;

  constructor(private accountSerivce: AccountService){
    this.accountSerivce.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if(user) this.user = user;
      }
    })
  }

  ngOnInit():void{
    this.initializeUploader();
  }

  fileOverBase(e: any){
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader(){
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/add-photo',
      authToken: 'Bearer ' + this.user?.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload:true,
      autoUpload:false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onAfterAddingFile = (file) =>{
      file.withCredentials = false;
    }

    this.uploader.onSuccessItem = (item, response, status, headers) =>{
      if(response){
        const photo = JSON.parse(response);
        this.member?.photos.push(photo);
      }
    }

  }



  
}
