import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GalleryComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular-firebase';
}
