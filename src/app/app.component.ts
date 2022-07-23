import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',  '../assets/css/bootstrap.min.css',
  '../assets/plugins/notifications/css/lobibox.min.css', '../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css',
   '../assets/plugins/simplebar/css/simplebar.css', '../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
   '../assets/plugins/metismenu/css/metisMenu.min.css', '../assets/css/pace.min.css', 
  '../assets/css/app.css','../assets/css/icons.css', '../assets/css/dark-theme.css', '../assets/css/semi-dark.css',
   '../assets/css/header-colors.css']
  
})
export class AppComponent {
  title = 'Kallpa App';

  constructor(){

  }

  
}
