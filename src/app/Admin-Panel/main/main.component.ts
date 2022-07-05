import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../../assets/css/bootstrap.min.css',
  '../../../assets/plugins/notifications/css/lobibox.min.css', '../../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css',
   '../../../assets/plugins/simplebar/css/simplebar.css', '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
   '../../../assets/plugins/metismenu/css/metisMenu.min.css', '../../../assets/css/pace.min.css', 
  '../../../assets/css/app.css', '../../../assets/css/icons.css', '../../../assets/css/dark-theme.css', '../../../assets/css/semi-dark.css',
   '../../../assets/css/header-colors.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('menu', { static : false }) Ulmenu! : ElementRef<HTMLUListElement>;

  ngAfterViewInit(): void {
    const menu = this.Ulmenu.nativeElement
    console.log(menu);
  };

}
