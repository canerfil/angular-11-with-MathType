import { Component } from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = '';

  public Editor:any = Editor;


  title = 'CKEditor5';
}
